import { useEffect, useState } from "react";
import { io } from 'socket.io-client';

import "./App.css";

const HOST_URL = process.env.REACT_APP_SERVER_URL;
const API_URL = `${HOST_URL}/api/items`;

function App() {
  const [data, setData] = useState({ items: [] });
  const [, setSocket] = useState();

  useEffect(() => {
    async function fetchFromApi() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData({ items: data.data });
    }

    const ioSocket = io(HOST_URL);
    setSocket(ioSocket);
    fetchFromApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          App
        </p>
        {data.items?.length > 0 &&
          data.items.map((item) => (
            <p key={item.description}>{item.description}</p>
          ))}
      </header>
    </div>
  );
}

export default App;
