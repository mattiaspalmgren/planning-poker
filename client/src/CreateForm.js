import "./CreateForm.css";

const CreateForm = () => {
  return (
    <div className={"CreateForm-wrapper"}>
      <div className={"CreateForm-item CreateForm-label"}>
        <label>Create planning session</label>
      </div>
      <div className={"CreateForm-item"}>
        <input
          className={"CreateForm-input-field"}
          id="example"
          type="text"
          name="text"
          placeholder={"Name of plannig session..."}
        />
      </div>
      <div className={"CreateForm-item"}>
        <button className={"CreateForm-submit-button"}>
          <span>CREATE</span>
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
