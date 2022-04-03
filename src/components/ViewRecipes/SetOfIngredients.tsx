// CSS, REACT ICONS --------------------------------------
import styles from "./Recipe.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { emptyIngredient } from "../../modules/emptyIngredient";
import { ingredient, setOfIngredients } from "../../modules/types";
// COMPONENT----------------------------------------------

const SetOfIngredients: React.FC<{
  setOfIngredients: setOfIngredients;
  setIndex: number;
  setsOfIngredientsLength: number;
  selectedIngredient: ingredient;
  setSelectedIngredient: React.Dispatch<React.SetStateAction<ingredient>>;
}> = (props) => {
  const { setOfIngredients, setIndex, setsOfIngredientsLength, selectedIngredient, setSelectedIngredient } = props;
  function onClick_handleSelectedIngredient(ingredient: ingredient): void {
    if (selectedIngredient.name === ingredient.name) {
      setSelectedIngredient(emptyIngredient);
    } else {
      setSelectedIngredient(ingredient);
    }
  }
  return (
    <div className={styles.setOfIngredients}>
      {setsOfIngredientsLength > 1 ? <h2>Set of ingredients No{setIndex + 1}</h2> : <h2>Set of ingredients</h2>}
      <h3>Ingredients:</h3>
      {setOfIngredients.ingredients.map((ingredient, index) => (
        <div key={index} className={styles.ingredient}>
          <div className={styles.index}>{index + 1}</div>
          <div className={styles.name} onClick={() => onClick_handleSelectedIngredient(ingredient)}>
            {ingredient.name}
          </div>
          <div className={styles.quantity}>{ingredient.quantity}</div>
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
export default SetOfIngredients;
