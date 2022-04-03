import { useEffect, useState } from "react";
import styles from "./Login.module.css";
// HOOKS
import { useLogin } from "../../firebaseHooks/useLogin";
import { useAuthContext } from "../../firebaseHooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  // ----------------------------------------------------------
  // STATE ----------------------------------------------------
  // ----------------------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login, successMessage } = useLogin();
  const { user } = useAuthContext();
  // ----------------------------------------------------------
  // HANDLERS--------------------------------------------------
  // ----------------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };
  // ----------------------------------------------------------
  // RETURN----------------------------------------------------
  // ----------------------------------------------------------
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.row}>
          <label>Email</label>
          <input required type="email" onChange={(event) => setEmail(event.target.value)} value={email}></input>
        </div>
        <div className={styles.row}>
          <label>Password</label>
          <input required type="password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
        </div>

        <button>LOGIN</button>
        {error && <p>{error}</p>}
        {successMessage === "Successfull login..!" && <p>{successMessage}</p>}
      </form>
    </div>
  );
};
