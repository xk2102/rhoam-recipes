import { useState } from "react";
import { useAuthContext } from "../firebaseHooks/useAuthContext";
// FIREBASE
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();
  // ----------------------------------------------------------
  // STATE ----------------------------------------------------
  // ----------------------------------------------------------
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  // ----------------------------------------------------------
  // FUNCTIONS ------------------------------------------------
  // ----------------------------------------------------------
  const register = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => dispatch({ type: "LOGIN", payload: res.user }))
      .then(() => {
        setSuccessMessage("Successfull registration..!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => setError(err.message));
  };
  // ----------------------------------------------------------
  // RETURN ---------------------------------------------------
  // ----------------------------------------------------------
  return { error, register, successMessage };
};
