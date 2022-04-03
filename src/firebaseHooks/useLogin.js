import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
// FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  // ----------------------------------------------------------
  // STATE ----------------------------------------------------
  // ----------------------------------------------------------
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  // ----------------------------------------------------------
  // FUNCTIONS-------------------------------------------------
  // ----------------------------------------------------------
  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => dispatch({ type: "LOGIN", payload: res.user }))
      .then(() => {
        setSuccessMessage("Successfull login..!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => setError(err.message));
  };
  // ----------------------------------------------------------
  // RETURN ---------------------------------------------------
  // ----------------------------------------------------------
  return { error, login, successMessage };
};
