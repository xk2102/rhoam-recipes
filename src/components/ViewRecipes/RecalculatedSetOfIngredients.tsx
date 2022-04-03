// CSS, REACT ICONS --------------------------------------
import styles from "./RecalculatedRecipe.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
// FIREBASE -----------------------------------------------
import { setOfIngredients } from "../../modules/types";
// COMPONENT----------------------------------------------
const RecalculatedSetOfIngredients: React.FC<{
  setOfIngredients: setOfIngredients;
  setIndex: number;
  setsOfIngredientsLength: number;
  multiplier: number;
}> = (props) => {
  const { setOfIngredients, setIndex, setsOfIngredientsLength, multiplier } = props;

  return (
    <div className={styles.setOfIngredients}>
      {setsOfIngredientsLength > 1 ? <h2>Set of ingredients No{setIndex + 1}</h2> : <h2>Set of ingredients</h2>}
      <h3>Ingredients:</h3>
      {setOfIngredients.ingredients.map((ingredient, index) => (
        <div key={index} className={styles.ingredient}>
          <div className={styles.index}>{index + 1}</div>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.quantity}>{(ingredient.quantity * multiplier).toFixed(0)}</div>
          <div className={styles.uom}>grams</div>
        </div>
      ))}
      <h3>Steps:</h3>
      {setOfIngredients.steps.map((step, index) => (
        <div key={index} className={styles.ingredient}>
          <div className={styles.index}>{index + 1}</div>
          <div className={styles.step}>{step.name}</div>
        </div>
      ))}
    </div>
  );
};
export default RecalculatedSetOfIngredients;
