import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const GET_SESSION_URL = `${SERVER_URL}/api/sessions`;

const SessionPage = () => {
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

  console.log(pathname);
  console.log(session);

  return <div>SessionPage</div>;
};

export default SessionPage;
