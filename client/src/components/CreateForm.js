import { useState } from "react";
import "./CreateForm.css";

const CreateForm = ({ createSession }) => {
  const [sessionName, setSessionName] = useState("");

  const handleSubmit = () => {
    createSession(sessionName);
  };

  const handleInputChange = (e) => {
    setSessionName(e.target.value);
  };

  return (
    <div className={"CreateForm-wrapper"}>
      <div className={"CreateForm-item CreateForm-label"}>
        <label>Create planning session</label>
      </div>
      <div className={"CreateForm-item"}>
        <input
          className={"CreateForm-input-field"}
          type="text"
          placeholder={"Name of plannig session..."}
          onChange={handleInputChange}
        />
      </div>
      <div className={"CreateForm-item"}>
        <button className={"CreateForm-submit-button"} onClick={handleSubmit}>
          CREATE
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
