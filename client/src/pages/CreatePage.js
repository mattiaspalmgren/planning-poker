import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useHistory } from "react-router";

import "../pages/CreatePage.css";
import CreateForm from "../components/CreateForm";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function CreatePage() {
  const [, setSocket] = useState();
  const history = useHistory();

  useEffect(() => {
    const ioSocket = io(SERVER_URL);
    setSocket(ioSocket);
  }, []);

  const createSession = async (name) => {
    const data = { name };
    const CREATE_SESSION_URL = `${SERVER_URL}/api/sessions`

    const response = await fetch(CREATE_SESSION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const responseJson = await response.json();
    history.push(`/${responseJson.id}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Planning Poker</h4>
      </header>
      <div className={"App-wrapper"}>
        <CreateForm createSession={createSession} />
      </div>
    </div>
  );
}

export default CreatePage;
