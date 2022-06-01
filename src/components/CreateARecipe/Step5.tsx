// CSS, REACT ICONS --------------------------------------
import styles from "./Step3.module.css";
// LIBRARIES ---------------------------------------------
import { useNavigate } from "react-router-dom";
// REACT -------------------------------------------------
import { useEffect } from "react";
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { recipe } from "../../modules/types";
// COMPONENT----------------------------------------------
// FIREBASE ----------------------------------------------
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../../firebaseHooks/useAuthContext";

// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type Step5Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  recipe: recipe;
  setRecipe: React.Dispatch<React.SetStateAction<recipe>>;
};
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
const Step5 = ({ step, setStep, recipe, setRecipe }: Step5Props) => {
  // CONTEXT
  const navigate = useNavigate();
  const { user } = useAuthContext();
  // USEEFFECTS
  useEffect(() => {
    (async function add() {
      const ref = collection(db, "recipes");
      await addDoc(ref, { ...recipe, uid: user.uid });
      setTimeout(() => {
        navigate("/ViewRecipes");
      }, 1500);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`animate ${styles.step}`}>
      <div className={styles.top}>
        <h2>
          The recipe <strong>{recipe.name}</strong> has been saved, find it in "View recipes" section..!
        </h2>
        <p>You will be redirected..!</p>
      </div>
      <div className={styles.bottom}>bottom</div>
    </div>
  );
};
export default Step5;
