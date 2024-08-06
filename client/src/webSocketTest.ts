let socket: WebSocket | null = null;

export const createWebSocket = (url: string) => {
  if ( !socket ) {
    socket = new WebSocket(url);

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      // console.log(event.data);
      try {
        const data = JSON.parse(event.data);
        console.log(data);
        // this.message = data.message;
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed', event);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }
  return socket;
};

export const getWebSocket = (): WebSocket | null => {
  return socket;
};

// get datas
// export const getDatas = () => {
//   const socket = getWebSocket();
//   if (socket) {
//     socket.onmessage = ( event ) => {
//       console.log( event.data );
//     };
//   }
// };

const webSocketUrl = import.meta.env.VITE_WEB_SOCKET_URL;
createWebSocket(webSocketUrl);

// getDatas();