import { useHistory } from "react-router";

import "../pages/CreatePage.css";
import CreateForm from "../components/CreateForm";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function CreatePage() {
  const history = useHistory();

  const createSession = async (name) => {
    const data = { name };
    const CREATE_SESSION_URL = `${SERVER_URL}/api/sessions`;

    const response = await fetch(CREATE_SESSION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    history.push(`/${responseJson.sessionId}`);
  };

  return <CreateForm createSession={createSession} />;
}

export default CreatePage;
