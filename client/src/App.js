import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import "./App.css";
import CreateForm from "./CreateForm";

const HOST_URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const [, setSocket] = useState();

  useEffect(() => {
    const ioSocket = io(HOST_URL);
    setSocket(ioSocket);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Planning Poker</h4>
      </header>
      <div className={"App-wrapper"}>
        <CreateForm />
      </div>
    </div>
  );
}

export default App;
