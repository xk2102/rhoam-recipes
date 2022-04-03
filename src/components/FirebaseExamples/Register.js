import styles from "./Register.module.css";
import { useState } from "react";
// HOOKS
import { useRegister } from "../../firebaseHooks/useRegister";
export const Register = () => {
  // ----------------------------------------------------------
  // STATE ----------------------------------------------------
  // ----------------------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordsDoNotMatchError, setPasswordsDoNotMatchError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { error, register, successMessage } = useRegister();
  // ----------------------------------------------------------
  // HANDLERS--------------------------------------------------
  // ----------------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === passwordConfirm) {
      setPasswordsDoNotMatchError("");
      register(email, password);
    } else {
      setPasswordsDoNotMatchError("Passwords do not match..!");
    }
  };
  // ----------------------------------------------------------
  // RETURN----------------------------------------------------
  // ----------------------------------------------------------
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label>Email:</label>
          <input required type="email" onChange={(event) => setEmail(event.target.value)} value={email}></input>
        </div>
        <div className={styles.row}>
          <label>Password:</label>
          <input required type="password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
        </div>
        <div className={styles.row}>
          <label>Password (confirm):</label>
          <input required type="password" onChange={(event) => setPasswordConfirm(event.target.value)} value={passwordConfirm}></input>
        </div>
        <button>REGISTER</button>
        {error && <p>{error}</p>}
        {passwordsDoNotMatchError}
        {successMessage === "Successfull registration..!" && <p>{successMessage}</p>}
      </form>
    </div>
  );
};
