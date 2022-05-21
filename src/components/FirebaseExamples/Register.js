import styles from "./Register.module.css";
import { useState } from "react";
// HOOKS
import { useRegister } from "../../firebaseHooks/useRegister";
import { InputRow } from "../InputRow";
export const Register = () => {
  // ----------------------------------------------------------
  // STATE ----------------------------------------------------
  // ----------------------------------------------------------
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordA, setPasswordA] = useState("");
  const [passwordAError, setPasswordAError] = useState("");
  const [passwordB, setPasswordB] = useState("");
  const [passwordBError, setPasswordBError] = useState("");
  const [passwordsDoNotMatchError, setPasswordsDoNotMatchError] = useState("");

  const { error, register, successMessage } = useRegister();
  // ----------------------------------------------------------
  // HANDLERS--------------------------------------------------
  // ----------------------------------------------------------
  function isEmail(email) {
    // eslint-disable-next-line
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordA = (event) => {
    setPasswordA(event.target.value);
  };
  const handlePasswordB = (event) => {
    setPasswordB(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let _emailError = "";
    let _passwordAError = "";
    let _passwordBError = "";
    let _passwordsDoNotMatchError = "";

    setEmailError("");
    setPasswordAError("");
    setPasswordBError("");
    setPasswordsDoNotMatchError("");

    if (!isEmail(email)) {
      _emailError = "not-an-email";
      setEmailError("not-an-email");
    } else {
      _emailError = "ok";
      setEmailError("ok");
    }

    if (passwordA !== passwordB) {
      _passwordsDoNotMatchError = "no-match";
      setPasswordsDoNotMatchError("no-match");
      setPasswordAError("no-match");
      setPasswordBError("no-match");
    } else {
      _passwordsDoNotMatchError = "ok";
      setPasswordsDoNotMatchError("ok");
      setPasswordAError("ok");
      setPasswordBError("ok");
    }

    if (passwordA === "") {
      _passwordAError = "empty-password";
      setPasswordAError("empty-password");
    } else {
      _passwordAError = "ok";
      setPasswordAError("ok");
    }

    if (passwordB === "") {
      _passwordBError = "empty-password";
      setPasswordBError("empty-password");
    } else {
      _passwordBError = "ok";
      setPasswordBError("ok");
    }

    if (_emailError === "ok" && _passwordAError === "ok" && _passwordBError === "ok" && _passwordsDoNotMatchError === "ok") {
      register(email, passwordA);
    }
  };
  // ----------------------------------------------------------
  // RETURN----------------------------------------------------
  // ----------------------------------------------------------
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <InputRow label="Email" name="email" type="email" value={email} handleValue={handleEmail} valueError={emailError} />
        <InputRow label="Password" type="password" name="passwordA" value={passwordA} handleValue={handlePasswordA} valueError={passwordAError} />
        <InputRow label="Password (confirm)" type="password" name="passwordB" value={passwordB} handleValue={handlePasswordB} valueError={passwordBError} />
        <button id={styles.register}>REGISTER</button>
        {error && <p className={styles.error}>{error}</p>}
        {emailError === "not-an-email" && <p className={styles.error}>Please enter a valid email..</p>}
        {passwordAError === "empty-password" && <p className={styles.error}>Please enter a valid password..</p>}
        {passwordBError === "empty-password" && <p className={styles.error}>Please enter a valid password..</p>}
        {passwordsDoNotMatchError === "no-match" && <p className={styles.error}>Passwords do not match..!</p>}
        {successMessage === "Successfull registration..!" && <p>{successMessage}</p>}
      </form>
    </div>
  );
};
