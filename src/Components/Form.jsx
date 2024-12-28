import { useState } from "react";
import "../style.css";
const Form = () => {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [ConfimPassword, setConfimPassword] = useState("");

  const [errorUsername, seterrorUsername] = useState("");
  const [erroremail, seterroremail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [errorConfirmPassword, seterrorConfirmPassword] = useState("");

  const [UserColor, setUserColor] = useState("");
  const [EmailColor, setEmailColor] = useState("");
  const [passwordColor, setpasswordColor] = useState("");
  const [ConfirmPassColor, setConfirmPassColor] = useState("");
  const validate = (e) => {
    e.preventDefault();
    if (userName.length >= 8) {
      seterrorUsername("");
      setUserColor("green");
    } else {
      seterrorUsername("User name should be 8 letters long.");
      setUserColor("red");
    }
    if (email.includes("@gmail")) {
      seterroremail("");
      setEmailColor("green");
    } else {
      seterroremail(`Email should have "@gmail" in it `);
      setEmailColor("red");
    }

    if (password.length >= 8) {
      seterrorPassword("");
      setpasswordColor("green");
    } else {
      seterrorPassword(`password must be 8 letters long `);
      setpasswordColor("red");
    }
    if (password != "" && password == ConfimPassword) {
      seterrorConfirmPassword("");
      setConfirmPassColor("green");
    } else {
      seterrorConfirmPassword(`password did't match`);
      setConfirmPassColor("red");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <div className="input-contain">
          <form>
            <input
              type="text"
              placeholder="name"
              style={{ borderColor: UserColor }}
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
            <p className="error">{errorUsername}</p>
            <input
              type="email"
              placeholder="email"
              style={{ borderColor: EmailColor }}
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <p className="error">{erroremail}</p>
            <input
              type="password"
              placeholder="password"
              style={{ borderColor: passwordColor }}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>
            <input
              type="password"
              placeholder="Confirm Password"
              style={{ borderColor: ConfirmPassColor }}
              value={ConfimPassword}
              onChange={(e) => setConfimPassword(e.target.value)}
            />
            <p className="error">{errorConfirmPassword}</p>
            <button className="submit-btn" onClick={validate}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
