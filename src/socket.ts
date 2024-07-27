import { io, Socket } from 'socket.io-client';

const socketBaseUrl = "https://socket-backend-production.up.railway.app";
const socketPath = '/admin-panel';

console.log("Socket backend URL:", socketBaseUrl);

const socket: Socket = io(socketBaseUrl, {
  // path: socketPath,
   transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
});

socket.on('connect', () => {
  console.log('Connected to the server');
  if (socket.disconnected) {
    socket.emit('request_status');
  }
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});

export default socket;
