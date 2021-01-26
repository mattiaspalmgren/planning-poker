import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const SessionPage = () => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const ioSocket = io(SERVER_URL);
    setSocket(ioSocket);
  }, []);

  return <div>SessionPage</div>;
};

export default SessionPage;
