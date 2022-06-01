// CSS, REACT ICONS --------------------------------------
import styles from "./Step3.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { recipe } from "../../modules/types";
// COMPONENT----------------------------------------------

// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type Step3Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  recipe: recipe;
  setRecipe: React.Dispatch<React.SetStateAction<recipe>>;
};
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
const Step3 = ({ step, setStep, recipe, setRecipe }: Step3Props) => {
  // --------------------------------------------------------------
  // HANDLERS------------------------------------------------------
  // --------------------------------------------------------------
  function onClick_addASetOfIngredients(): void {
    let temp = recipe.setsOfIngredients;
    temp.push({
      ingredients: [
        { name: "", quantity: 0 },
        { name: "", quantity: 0 },
      ],
      steps: [{ name: "" }, { name: "" }],
    });
    setRecipe((prevRecipe) => ({ ...prevRecipe, setsOfIngredients: temp }));
  }
  return (
    <div className={`animate ${styles.step}`}>
      <div className={styles.top}>
        <h2>Would you like to add another set of ingredients..?</h2>
        <div className={styles.button_row}>
          <button id={styles.noThankYou} onClick={() => setStep(5)}>
            NO, thank you
          </button>
          <button
            id={styles.yesPlease}
            onClick={() => {
              setStep(2);
              // setCurrentSoiIndex(currentSoiIndex + 1);
              onClick_addASetOfIngredients();
            }}
          >
            Yes, please
          </button>
        </div>
        <div className={styles.button_row}>
          <button id={styles.back} onClick={() => setStep(2)}>
            BACK (to last set of ingredients)
          </button>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};
export default Step3;
