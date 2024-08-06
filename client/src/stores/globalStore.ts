import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
  const socket = ref<WebSocket | null>(null);
  const webSocketStatus = ref('');
  const isConnected = ref(false);
  const buffer = ref<string[]>([]); // 메시지 큐
  const webSocketTestUrl = `${import.meta.env.VITE_WEB_SOCKET_TEST_PROTOCOL}://${import.meta.env.VITE_WEB_SOCKET_TEST_HOST}:${import.meta.env.VITE_WEB_SOCKET_TEST_PORT}`;
  const webSocketTestUrl2 = `${import.meta.env.VITE_WEB_SOCKET_TEST_PROTOCOL}://${import.meta.env.VITE_WEB_SOCKET_TEST_HOST2}:${import.meta.env.VITE_WEB_SOCKET_TEST_PORT2}`;

  const isStop = ref(false);

  type Message = {
    MessageID: string;
    MessageData: any;
  };

  const D1GUIMsgZoneInfosReq = {
    'MessageID': 'D1GUIMsgZoneInfosReq',
    'MessageData': {
      'OwnerIDs': '',
      'BaseTime': ''
    }
  };

  const responsedZoneData = ref<Message[]>([]);
  const zoneDataTempArr = ref<Message[]>([]);

  function storeCategorizedMessage(message: Message) {
    // console.log('storeCategorizedMessage 실행');

    function categorizedMessageID(message: Message) {
      if (message.MessageID === 'D1GUIMsgZoneInfosRsp') {
        const zoneIndex = parseInt(message.MessageData.Index, 10);
        const zoneIndexCount = parseInt(message.MessageData.IndexCount, 10);
        if (zoneIndex + 1 <= zoneIndexCount) {
          zoneDataTempArr.value[zoneIndex] = {...message.MessageData.ZoneString.LPRPurgeAttributes, BaseTime: message.MessageData.BaseTime };
          if (zoneIndex + 1 === zoneIndexCount) {
            responsedZoneData.value = [...zoneDataTempArr.value];
            console.log('Zone data responsed successfully', responsedZoneData.value);
          }
        } else {
          console.warn('D1GUIMsgZoneInfosRsp range error');
        }
      } else if (message.MessageID === 'LPRZonePurgeAttributesMsg') {
        console.log('LPRZonePurgeAttributesMsg responsed successfully');
        let responsedZoneID = message.MessageData.ArchiveObject.ZoneID;

        // Zone ID 혼선으로 임시로 보정해 테스트
        switch (responsedZoneID) {
          case '11110010':
            responsedZoneID = '10010010';
            message.MessageData.ArchiveObject.ZoneID = '10010010';
            break;
          case '11110020':
            responsedZoneID = '10010020';
            message.MessageData.ArchiveObject.ZoneID = '10010020';
            break;
          default:
            console.warn('need check responseZoneID');
        }

        // console.log(responsedZoneID);
        if (responsedZoneData.value) {
          responsedZoneData.value.forEach((eachData:any, index:number) => {
            // console.log('eachData: ', eachData);
            // console.log('eachData.ZoneID: ', eachData.ZoneID, ' type: ', typeof eachData.zoneID);
            // console.log('responsedZoneID: ', responsedZoneID, ' type: ', typeof responsedZoneID);
            
            if (eachData.ZoneID === responsedZoneID) {
              console.log('zoneID 찾음!!');

              responsedZoneData.value[index] = {...message.MessageData.ArchiveObject, BaseTime: message.MessageData.BaseTime};
              // console.log('갱신됨? ', responsedZoneData);
            }
          });
        }
      } else {
        console.warn('Invalid message format:', message);
      }
    }
    categorizedMessageID(message);
  }

  function processMessage(messageStr: string) {
    const isJSON = (str: string): boolean => {
      try {
        JSON.parse(str);
        return true;
      } catch (error) {
        return false;
      }
    };

    if (isJSON(messageStr)) {
      try {
        const data = JSON.parse(messageStr);

        if (data.MessageData.ZoneString) {
          const zoneData = JSON.parse(data.MessageData.ZoneString);
          data.MessageData.ZoneString = zoneData;  
        }

        console.log('parsedData: ', data);

        storeCategorizedMessage(data);
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    }
  }

  function processBuffer() {
    while (buffer.value.length > 0) {
      const messageStr = buffer.value.shift(); // 큐에서 메시지 하나를 꺼내 처리
      if (messageStr) {
        processMessage(messageStr);
      }
    }
  }

  function createWebSocket(url: string) {
    try {
      socket.value = new WebSocket(url);

      socket.value.onopen = () => {
        webSocketStatus.value = 'Connected successfully';
        
        isConnected.value = true;
        console.log('WebSocket connection established');

        sendMessage(JSON.stringify(D1GUIMsgZoneInfosReq));

        // test
        // const testObj1 = JSON.stringify({'MessageID':'D1GUIMsgZoneInfosRsp','MessageData':{'Index':'0','IndexCount':'5','ZoneString':'{"ZoneID":"10010010","Name":"10010010","Level":"-1","Direction":"0","OccupiedAttributes":{"ZoneID":"10010010","ReservedTaskID":"-1"},"StateAttributes":{"ZoneID":"10010010","ZoneState":"0","AlarmID":"-1"},"Maker":"-1","LPRPurgeAttributes":{"ZoneID":"10010010","Flow1":"99.9","Flow2":"23.03","Flow3":"-1","Pressure":"22.2222","Humidity":"1.888","Temperature":"-8"},"LPRUserAttributes":{"ZoneID":"10010010","AutoIOPort":"-1"}}','ZoneGUIDataString':'','BaseTime':'2024.07.31 14:58:02'}});

        // const testObj2 = JSON.stringify({'MessageID':'D1GUIMsgZoneInfosRsp','MessageData':{'Index':'1','IndexCount':'5','ZoneString':'{"ZoneID":"10010020","Name":"10010020","Level":"-1","Direction":"0","OccupiedAttributes":{"ZoneID":"10010010","ReservedTaskID":"-1"},"StateAttributes":{"ZoneID":"10010020","ZoneState":"0","AlarmID":"-1"},"Maker":"-1","LPRPurgeAttributes":{"ZoneID":"10010020","Flow1":"99.9","Flow2":"23.03","Flow3":"-1","Pressure":"22.2222","Humidity":"1.888","Temperature":"-8"},"LPRUserAttributes":{"ZoneID":"10010020","AutoIOPort":"-1"}}','ZoneGUIDataString':'','BaseTime':'2024.07.31 14:58:02'}});
      
        // const testObj3 = JSON.stringify({'MessageID':'D1GUIMsgZoneInfosRsp','MessageData':{'Index':'2','IndexCount':'5','ZoneString':'{"ZoneID":"10010030","Name":"10010030","Level":"-1","Direction":"0","OccupiedAttributes":{"ZoneID":"10010010","ReservedTaskID":"-1"},"StateAttributes":{"ZoneID":"10010030","ZoneState":"0","AlarmID":"-1"},"Maker":"-1","LPRPurgeAttributes":{"ZoneID":"10010030","Flow1":"99.9","Flow2":"23.03","Flow3":"-1","Pressure":"22.2222","Humidity":"1.888","Temperature":"-8"},"LPRUserAttributes":{"ZoneID":"10010030","AutoIOPort":"-1"}}','ZoneGUIDataString':'','BaseTime':'2024.07.31 14:58:02'}});
      
        // const testObj4 = JSON.stringify({'MessageID':'D1GUIMsgZoneInfosRsp','MessageData':{'Index':'3','IndexCount':'5','ZoneString':'{"ZoneID":"10010040","Name":"10010040","Level":"-1","Direction":"0","OccupiedAttributes":{"ZoneID":"10010010","ReservedTaskID":"-1"},"StateAttributes":{"ZoneID":"10010040","ZoneState":"0","AlarmID":"-1"},"Maker":"-1","LPRPurgeAttributes":{"ZoneID":"10010040","Flow1":"99.9","Flow2":"23.03","Flow3":"-1","Pressure":"22.2222","Humidity":"1.888","Temperature":"-8"},"LPRUserAttributes":{"ZoneID":"10010040","AutoIOPort":"-1"}}','ZoneGUIDataString':'','BaseTime':'2024.07.31 14:58:02'}});
      
        // const testObj5 = JSON.stringify({'MessageID':'D1GUIMsgZoneInfosRsp','MessageData':{'Index':'4','IndexCount':'5','ZoneString':'{"ZoneID":"10010050","Name":"10010050","Level":"-1","Direction":"0","OccupiedAttributes":{"ZoneID":"10010010","ReservedTaskID":"-1"},"StateAttributes":{"ZoneID":"10010050","ZoneState":"0","AlarmID":"-1"},"Maker":"-1","LPRPurgeAttributes":{"ZoneID":"10010050","Flow1":"99.9","Flow2":"23.03","Flow3":"-1","Pressure":"22.2222","Humidity":"1.888","Temperature":"-8"},"LPRUserAttributes":{"ZoneID":"10010050","AutoIOPort":"-1"}}','ZoneGUIDataString':'','BaseTime':'2024.07.31 14:58:02'}});
      
        // buffer.value.push(testObj1);
        // buffer.value.push(testObj2);
        // buffer.value.push(testObj3);
        // buffer.value.push(testObj4);
        // buffer.value.push(testObj5);
        // processBuffer();

      };

      socket.value.onmessage = (event) => {
        console.log('rawMessage: ', event.data);
        buffer.value.push(event.data); // 수신된 메시지를 큐에 추가
        processBuffer();
      };

      socket.value.onclose = (event) => {
        webSocketStatus.value = 'Closed';

        isConnected.value = false;
        console.log(`WebSocket connection closed: ${event.code} - ${event.reason}`);
        setTimeout(() => createWebSocket(url), 5000); // 일정 시간 후 다시 연결 시도
      };

      socket.value.onerror = (error) => {
        webSocketStatus.value = 'Connection error';

        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Error creating WebSocket:', error);
    }
  }

  function sendMessage(message: string) {
    if (socket.value && isConnected.value) {
      try {
        socket.value.send(message);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  }

  function toggleStop() {
    console.log('toggleStop 실행');
    isStop.value = !isStop.value;
    const action = isStop.value ? 'resume' : 'stop';

    console.log('[toggleStop] isStop: ', isStop.value);
    console.log('[toggleStop] action: ', action);

    if (socket.value && isConnected.value) {
      try {
        // socket.value.send(JSON.stringify({ action }));
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  }

  function getDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDate);

    return formattedDate;
  }

  return {
    socket,
    isConnected,
    createWebSocket,
    sendMessage,
    isStop,
    toggleStop,
    getDateTime,
    responsedZoneData,
    webSocketTestUrl,
    webSocketTestUrl2,
    webSocketStatus
  };
});
