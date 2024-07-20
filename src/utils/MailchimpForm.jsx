import { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <form
      className=" bg-white  p-5 gap-y-3 flex flex-col"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h3 className="mc__title">Join our email list for future updates.</h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div className="mc__field-container">
        <InputField
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="Email Addres..."
          isRequired
        />
      </div>

      <InputField label="subscribe" type="submit" formValues={[email]} />

      <p className="text-yellow-300">Your mail is fully protected</p>
    </form>
  );
};

const MailchimpForm = () => {
  const postUrl = `https://xyz.us21.list-manage.com/subscribe/post?u=${
    import.meta.env.VITE_REACT_APP_MAILCHIMP_U
  }&id=${import.meta.env.VITE_REACT_APP_MAILCHIMP_ID}`;

  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
