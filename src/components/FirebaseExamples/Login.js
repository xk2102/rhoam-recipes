import { useEffect, useState } from "react";
import styles from "./Login.module.css";
// HOOKS
import { useLogin } from "../../firebaseHooks/useLogin";
import { useAuthContext } from "../../firebaseHooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { InputRow } from "../InputRow";

export const Login = () => {
  const navigate = useNavigate();
  // ----------------------------------------------------------
  // STATE ----------------------------------------------------
  // ----------------------------------------------------------
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { error, login, successMessage } = useLogin();
  const { user } = useAuthContext();
  // ----------------------------------------------------------
  // HANDLERS--------------------------------------------------
  // ----------------------------------------------------------
  useEffect(() => console.log(password), [password]);
  function isEmail(email) {
    // eslint-disable-next-line
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let _emailError = "";
    let _passwordError = "";
    setEmailError("");
    setPasswordError("");

    if (!isEmail(email)) {
      _emailError = "not-an-email";
      setEmailError("not-an-email");
    } else {
      _emailError = "ok";
      setEmailError("ok");
    }

    if (password === "") {
      _passwordError = "empty-password";
      setPasswordError("empty-password");
    } else {
      _passwordError = "ok";
      setPasswordError("ok");
    }

    _emailError === "ok" && _passwordError === "ok" && login(email, password);
  };
  // ----------------------------------------------------------
  // RETURN----------------------------------------------------
  // ----------------------------------------------------------
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <InputRow label="Email" name="email" type="email" value={email} handleValue={handleEmail} valueError={emailError} />
        <InputRow label="Password" name="password" type="password" value={password} handleValue={handlePassword} valueError={passwordError} />
        <button id={styles.login}>LOGIN</button>
        {error && <p className={styles.error}>{error}</p>}
        {emailError === "not-an-email" && <p className={styles.error}>Please enter a valid email..</p>}
        {passwordError === "empty-password" && <p className={styles.error}>Please enter a valid password..</p>}
        {successMessage === "Successfull login..!" && <p>{successMessage}</p>}
      </form>
    </div>
  );
};
