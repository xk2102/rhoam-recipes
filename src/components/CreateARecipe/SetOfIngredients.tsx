// CSS, REACT ICONS --------------------------------------
import styles from "./SetOfIngredients.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { setOfIngredients } from "../../modules/types";
// COMPONENT----------------------------------------------

const SetOfIngredients: React.FC<{ setOfIngredients: setOfIngredients }> = (props) => {
  // PROPS
  const { setOfIngredients } = props;
  return (
    <div className={styles.setOfIngredients}>
      {setOfIngredients.ingredients.map((ingredient, index) => (
        <div className={styles.row}>
          <label>{`${index + 1}`}</label>
          <input name="ingredientName" value={ingredient.name} type="text" placeholder="Enter ingredient name.."></input>
          <input name="ingredientQuantity" value={ingredient.quantity} type="text" placeholder="Enter ingredient quantity.."></input>
        </div>
      ))}
    </div>
  );
};
export default SetOfIngredients;
