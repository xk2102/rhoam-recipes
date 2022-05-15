// CSS, REACT ICONS --------------------------------------
import styles from "./Step2.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
import { useState } from "react";
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { recipe } from "../../modules/types";
// COMPONENT----------------------------------------------

// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type Step4Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  recipe: recipe;
  setRecipe: React.Dispatch<React.SetStateAction<recipe>>;
  currentSoiIndex: number;
  setCurrentSoiIndex: React.Dispatch<React.SetStateAction<number>>;
};
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
const Step4 = ({ step, setStep, recipe, setRecipe, currentSoiIndex, setCurrentSoiIndex }: Step4Props) => {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------
  const [ingredientError, setIngredientError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onChange_handleIngredients(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
    let temp = recipe.setsOfIngredients;
    switch (event.target.name) {
      case "data":
        temp[currentSoiIndex].ingredients[index].name = event.target.value;
        break;
      case "quantity":
        if (event.target.value === "") {
          temp[currentSoiIndex].ingredients[index].quantity = 0;
        } else {
          temp[currentSoiIndex].ingredients[index].quantity = parseInt(event.target.value);
        }
        break;
      default:
      // default
    }
    setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
  }
  function onChange_handleSteps(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
    let temp = recipe.setsOfIngredients;
    temp[currentSoiIndex].steps[index].name = event.target.value;
    setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
  }
  function onClick_handleIngredientsSize(action: string) {
    let temp = recipe.setsOfIngredients;
    switch (action) {
      case "push":
        temp[currentSoiIndex].ingredients.push({ name: "", quantity: 0 });
        setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
        break;
      case "pop":
        if (temp[currentSoiIndex].ingredients.length > 1) {
          temp[currentSoiIndex].ingredients.pop();
          setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
        }
        break;
      default:
      // default
    }
  }
  function onClick_handleStepSize(action: string) {
    let temp = recipe.setsOfIngredients;
    switch (action) {
      case "push":
        temp[currentSoiIndex].steps.push({ name: "" });
        setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
        break;
      case "pop":
        if (temp[currentSoiIndex].steps.length > 1) {
          temp[currentSoiIndex].steps.pop();
          setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
        }
        break;
      default:
      // default
    }
  }
  function proceed() {
    setStepError(null);
    setIngredientError(null);

    let se = "";
    let ie = "";

    recipe.setsOfIngredients[currentSoiIndex].ingredients.forEach((ingredient, index) => {
      if (ingredient.name === "" || ingredient.quantity === 0) {
        ie = `Please don't leave empty fields..!`;
      }
    });
    recipe.setsOfIngredients[currentSoiIndex].steps.forEach((step, index) => {
      if (step.name === "") {
        se = `Please don't leave step no${index + 1} empty..!`;
      }
    });

    ie !== "" && setIngredientError(ie);
    se !== "" && setStepError(se);

    ie === "" && se === "" && setStep(step + 1);
  }
  return (
    <div className={`animate ${styles.step}`}>
      <div className={styles.top}>
        {" "}
        <h2>Enter the 2nd set of ingredients</h2>
        <h3>Ingredients</h3>
        {recipe.setsOfIngredients[currentSoiIndex].ingredients.map((ingredient, index) => (
          <div className={`animate ${styles.row}`} key={index}>
            <label>{`${index + 1}`}</label>
            <input name="data" type="text" value={ingredient.name} placeholder="Ingredient name.." onChange={(event) => onChange_handleIngredients(event, index)}></input>
            <input
              name="quantity"
              className={styles.quantity}
              type="text"
              value={ingredient.quantity}
              placeholder="Ingredient quantity (grams).."
              onChange={(event) => onChange_handleIngredients(event, index)}
            ></input>
            <label style={{ fontSize: "smaller" }}>grams</label>
          </div>
        ))}
        <div className={styles.row}>
          <button onClick={() => onClick_handleIngredientsSize("pop")}>REMOVE LAST INGREDIENT</button>
          <button onClick={() => onClick_handleIngredientsSize("push")}>ADD ONE INGREDIENT</button>
        </div>
        <div className={styles.row}></div>
        {ingredientError && <p className={styles.error}>{ingredientError}</p>}
        <h3>Steps</h3>
        {recipe.setsOfIngredients[currentSoiIndex].steps.map((step, index) => (
          <div className={`animate ${styles.row}`} key={index}>
            <label>{`${index + 1}`}</label>
            <input type="text" value={step.name} placeholder="Enter step description.." onChange={(event) => onChange_handleSteps(event, index)}></input>
          </div>
        ))}
        <div className={styles.row}>
          <button onClick={() => onClick_handleStepSize("pop")}>REMOVE LAST STEP</button>
          <button onClick={() => onClick_handleStepSize("push")}>ADD ONE STEP</button>
        </div>
        {stepError && <p className={styles.error}>{stepError}</p>}
      </div>
      <div className={styles.bottom}>
        <div className={styles.row}>
          <button
            onClick={() => {
              setStep(2);
              (function removeASetOfIngredients(): void {
                let temp = recipe.setsOfIngredients;
                temp.pop();
                setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
              })();
              setCurrentSoiIndex(0);
            }}
          >
            BACK (to 1st set of ingredients)
          </button>
        </div>
        <div className={styles.row}>
          <button onClick={() => proceed()}>NEXT</button>
        </div>
      </div>
    </div>
  );
};
export default Step4;
