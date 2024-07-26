import React, { useEffect } from 'react';
import './App.css';
// import Hello from './Hello';
import socket from './socket';

const App: React.FC = () => {
  useEffect(() => {
    // Handle any additional socket events here
    socket.on('some_event', (data) => {
      console.log('Received some_event:', data);
    });

    // Cleanup on unmount
    return () => {
      socket.off('some_event');
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello name="World" /> */}
      </header>
    </div>
  );
}

export default App;
