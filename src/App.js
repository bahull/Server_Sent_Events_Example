import React from 'react';
import logo from './logo.svg';
import './App.css';

import EventSourcer from './EventSourcer/EventSourcer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventSourcer src="http://localhost:3000/event-stream?userID=1"/>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{width: '80%', margin: 'auto'}}>
          <p>
            Click the button below to test the EventSourcer. 
          </p>
          <p>
            This example replicates a client subscribing to the server and the server then recieving a request from an outside source and notifying the correct subscribed client.
          </p>
          <button
            onClick={() => {
              fetch("http://localhost:3000/requests")
            }}
          >
            See if someones looking!
          </button>

        </div>
      </header>
    </div>
  );
}

export default App;
