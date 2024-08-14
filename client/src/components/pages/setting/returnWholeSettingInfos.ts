import { useGlobalStore } from '@/stores/globalStore';

interface TargetFlow {
  // 'Front': string,
  // 'Rear': string,
  [key: string]: string
}
interface DataObj {
  TargetCommand: string;
  [key: string]: string | string[] | TargetFlow; // 동적으로 키와 값을 추가할 수 있도록 설정
}

interface SettingAllObj {
  MessageID: string;
  MessageData: {
    DataList: DataObj[],
    BaseTime: string
  },
}

const returnWholeSettingInfos = ():object => {
  const settingAllObj: SettingAllObj = {
    MessageID: 'SingalGUIMsgPurgeReq',
    MessageData: {
      DataList: [],
      BaseTime: ''
    }
  };
  
  const globalStore = useGlobalStore();

  settingAllObj.MessageData.BaseTime = globalStore.getDateTime();

  document.querySelectorAll('.settingRow').forEach(settingRow => {
    const msgArea = settingRow.querySelector('.msgArea') as HTMLElement | null;
    const TargetCommand = msgArea ? msgArea.innerText : '';

    const dataObj: DataObj = { TargetCommand: TargetCommand };
    let tempFlowObj: TargetFlow = {
      'Front': '',
      'Rear': ''
    };

    settingRow.querySelectorAll('input[type="text"]').forEach(inputDOM => {
      // console.log(inputDOM);
      const element = inputDOM as HTMLInputElement | HTMLSelectElement;
      const className = element.className;
      const value = element.value;

      // console.log('className: ', className);
      if (className === 'TargetFlow Front' || className === 'TargetFlow Rear') {
        if (tempFlowObj.Front && tempFlowObj.Rear) {
          tempFlowObj = {
            'Front': '',
            'Rear': ''
          };
        } else { 
          const frontOrRear: string = className.split(' ')[1];
          console.log(frontOrRear);
          tempFlowObj[frontOrRear] = value;
          dataObj['TargetFlow'] = tempFlowObj;
          // dataObj[frontOrRear] = value;
          // if (frontOrRear === 'Front') {
          //   dataObj.Front = value;
          // } else if (frontOrRear === 'Rear') {
          //   dataObj.Rear = value;
          // }
        }
      
      } else {
        dataObj[className] = value;
      }

    });

    settingRow.querySelectorAll('.TargetStatus').forEach((inputDOM, index) => {
      const element = inputDOM as HTMLInputElement | HTMLSelectElement;
      const className = element.className;
      const value = element.value;

    if (index === 0) {
      dataObj[className] = [value];
    } else if (Array.isArray(dataObj[className])) {
      (dataObj[className] as string[]).push(value);
    }
  });

    settingAllObj.MessageData.DataList.push(dataObj);
  });

  // console.log(JSON.stringify(settingAllObj));
  console.log(settingAllObj);

  return settingAllObj;
};

export default returnWholeSettingInfos;
