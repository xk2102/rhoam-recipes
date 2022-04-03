// CSS, REACT ICONS --------------------------------------
import styles from "./Step1.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
import { useState } from "react";
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { emptyRecipe } from "../../modules/emptyRecipe";
import { recipe } from "../../modules/types";
// COMPONENT----------------------------------------------

const Step1: React.FC<{ step: number; setStep: React.Dispatch<React.SetStateAction<number>>; recipe: recipe; setRecipe: React.Dispatch<React.SetStateAction<recipe>> }> = (props) => {
  // PROPS
  const { step, setStep, recipe, setRecipe } = props;
  // STATE
  const [error, setError] = useState<string | null>(null);
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onChange_handleRecipe(event: React.ChangeEvent<HTMLInputElement>): void {
    switch (event.target.name) {
      case "name":
      case "info":
        setRecipe((prevRecipe) => ({ ...prevRecipe, [event.target.name]: event.target.value }));
        break;
      case "prepTime":
      case "cookTime":
        if (event.target.value === "") {
          setRecipe((prevRecipe) => ({ ...prevRecipe, [event.target.name]: 0 }));
        } else {
          setRecipe((prevRecipe) => ({ ...prevRecipe, [event.target.name]: parseInt(event.target.value) }));
        }
        break;
      default:
      // default
    }
  }
  function onClick_handleReset(): void {
    setRecipe(emptyRecipe);
    setError(null);
  }
  function proceed() {
    setError(null);
    if (recipe.name === "") {
      setError("The recipe must have a name..!");
    } else if (recipe.info === "") {
      setError("Please provide some info..!");
    } else if (recipe.prepTime === 0) {
      setError("Prep time can't be 0..!");
    } else if (recipe.cookTime === 0) {
      setError("Cook time can't be 0..!");
    } else {
      setError(null);
      setStep(step + 1);
    }
  }
  return (
    <div className={`animate ${styles.step}`}>
      <h2>Let's start with: </h2>
      <div className={styles.row}>
        <label>Name: </label>
        <input required value={recipe.name} name="name" type="text" placeholder="Enter a name.." onChange={(event) => onChange_handleRecipe(event)}></input>
      </div>
      <div className={styles.row}>
        <label>Info: </label>
        <input value={recipe.info} name="info" type="text" placeholder="Enter some info.." onChange={(event) => onChange_handleRecipe(event)}></input>
      </div>
      <div className={styles.row}>
        <label>Prep time (minutes): </label>
        <input value={recipe.prepTime} name="prepTime" type="text" placeholder="Enter prep time.." onChange={(event) => onChange_handleRecipe(event)}></input>
      </div>
      <div className={styles.row}>
        <label>Cook time (minutes): </label>
        <input value={recipe.cookTime} name="cookTime" type="text" placeholder="Enter cook time.." onChange={(event) => onChange_handleRecipe(event)}></input>
      </div>
      <div className={styles.row}>
        <button onClick={() => onClick_handleReset()}>CLEAR</button>
        <button onClick={() => proceed()}>NEXT</button>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
export default Step1;
