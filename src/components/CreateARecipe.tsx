// CSS, REACT ICONS --------------------------------------
import styles from "./CreateARecipe.module.css";
// LIBRARIES ---------------------------------------------
import { Link } from "react-router-dom";
import { uid } from "uid";
// REACT -------------------------------------------------
import { useEffect, useState } from "react";
// COMPONENTS----------------------------------------------
import Step1 from "./CreateARecipe/Step1";
import Step2 from "./CreateARecipe/Step2";
import Step3 from "./CreateARecipe/Step3";
import Step4 from "./CreateARecipe/Step4";
import Step5 from "./CreateARecipe/Step5";
// MODULES ------------------------------------------------
import { recipe } from "../modules/types";
// FIREBASE -----------------------------------------------
import { useAuthContext } from "../firebaseHooks/useAuthContext";

export default function CreateARecipe() {
  // ------------------------------------
  // STATE-------------------------------
  // ------------------------------------
  const { user } = useAuthContext();
  const [step, setStep] = useState<number>(1);
  const [currentSoiIndex, setCurrentSoiIndex] = useState<number>(0);
  const [recipe, setRecipe] = useState<recipe>({
    id: uid(),
    name: "",
    info: "",
    prepTime: 0,
    cookTime: 0,
    setsOfIngredients: [
      {
        ingredients: [
          { name: "", quantity: 0 },
          { name: "", quantity: 0 },
        ],
        steps: [{ name: "" }, { name: "" }],
      },
    ],
  });
  useEffect(() => console.log("recipe: ", recipe), [recipe]);
  if (user) {
    return (
      <div className={styles.createARecipe}>
        <h1>Create a recipe {`(${step}/3)`}</h1>
        {step === 1 && <Step1 step={step} setStep={setStep} recipe={recipe} setRecipe={setRecipe} />}
        {step === 2 && <Step2 step={step} setStep={setStep} recipe={recipe} setRecipe={setRecipe} currentSoiIndex={currentSoiIndex} />}
        {step === 3 && <Step3 step={step} setStep={setStep} recipe={recipe} setRecipe={setRecipe} currentSoiIndex={currentSoiIndex} setCurrentSoiIndex={setCurrentSoiIndex} />}
        {step === 4 && <Step4 step={step} setStep={setStep} recipe={recipe} setRecipe={setRecipe} currentSoiIndex={currentSoiIndex} setCurrentSoiIndex={setCurrentSoiIndex} />}
        {step === 5 && <Step5 step={step} setStep={setStep} recipe={recipe} setRecipe={setRecipe} currentSoiIndex={currentSoiIndex} setCurrentSoiIndex={setCurrentSoiIndex} />}
      </div>
    );
  } else {
    return (
      <div className={`${styles.createARecipe}`}>
        <h1>Create a recipe</h1>
        <p>
          Please <Link to="/Login">🔗login</Link> or <Link to="/Register">🔗register</Link> before you use the app..!
        </p>
      </div>
    );
  }
}
