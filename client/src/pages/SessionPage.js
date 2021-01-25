import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useLocation } from "react-router";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const GET_SESSION_URL = `${SERVER_URL}/api/sessions`;

const SessionPage = () => {
  const [, setSocket] = useState();
  const [session, setSession] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionId = pathname.replace("/", "");
      const response = await fetch(`${GET_SESSION_URL}/${sessionId}`);
      const responseJson = await response.json();
      setSession(responseJson);
    };

    fetchSession();
  }, [pathname]);

  useEffect(() => {
    const ioSocket = io(SERVER_URL);
    setSocket(ioSocket);
  }, [session]);

  return <div>SessionPage</div>;
};

export default SessionPage;
