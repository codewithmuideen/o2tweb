const InputField = (props) => {
  const validateInput = (values) => {
    if (values.some((f) => f === "") || values[0].indexOf("@") === -1) {
      return true;
    } else {
      return false;
    }
  };

  if (props.type === "submit") {
    return (
      <input
        className=" w-[50%] bg-Blue p-2 rounded-xl font-medium text-white1"
        type="submit"
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    );
  } else if (props.type === "textarea") {
    return (
      <label className="inputField__label">
        {props.label}
        <textarea
          onChange={(e) => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field"
          rows={7}
          name={props.name}
        />
      </label>
    );
  } else {
    return (
      <label className="inputField__label">
        <input
          onChange={(e) => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="p-2 focus:outline-none bg-[#f5f8fa] w-[80%]"
          name={props.name}
        />
      </label>
    );
  }
};

export default InputField;
