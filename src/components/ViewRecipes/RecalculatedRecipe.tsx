// CSS, REACT ICONS --------------------------------------
import styles from "./RecalculatedRecipe.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
// COMPONENTS----------------------------------------------
import RecalculatedSetOfIngredients from "./RecalculatedSetOfIngredients";
// MODULES ------------------------------------------------
// COMPONENT----------------------------------------------

const RecalculatedRecipe: React.FC<{ multiplier: number }> = (props) => {
  const { multiplier } = props;
  // GLOBAl CONTEXT
  const _GlobalContext = useContext(GlobalContext);
  const { selectedRecipe, totalIngredientsWeight } = _GlobalContext!;
  return (
    <div className={styles.recipe}>
      <div className={styles.row}>
        <h1>{selectedRecipe.name} [Recalculated]</h1>
      </div>
      <p>
        <span id="bold">Info: </span>
        {selectedRecipe.info}
      </p>
      <p>
        <span id="bold">Prep time: </span>
        {selectedRecipe.prepTime} minutes
      </p>
      <p>
        <span id="bold">Cook time: </span>
        {selectedRecipe.cookTime} minutes
      </p>
      <p>
        <span id="bold">Total weight: </span>
        {`${(totalIngredientsWeight * multiplier).toFixed(0)} grams`}
      </p>
      {selectedRecipe.setsOfIngredients.map((setOfIngredients, index) => (
        <RecalculatedSetOfIngredients key={index} setOfIngredients={setOfIngredients} setIndex={index} setsOfIngredientsLength={selectedRecipe.setsOfIngredients.length} multiplier={multiplier} />
      ))}
    </div>
  );
};
export default RecalculatedRecipe;
