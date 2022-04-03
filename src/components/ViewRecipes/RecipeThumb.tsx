// CSS, REACT ICONS --------------------------------------
import styles from "./RecipesList.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
// COMPONENT----------------------------------------------

const RecipeThump: React.FC<{ recipeName: string }> = (props) => {
  return <div className={styles.recipeThumb}>{props.recipeName}</div>;
};
export default RecipeThump;
