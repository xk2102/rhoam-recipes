// CSS, REACT ICONS --------------------------------------
import styles from "./RecipesList.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { emptyRecipe } from "../../modules/emptyRecipe";
// COMPONENT----------------------------------------------
// FIREBASE------------------------------------------------
import { useAuthContext } from "../../firebaseHooks/useAuthContext";
import { useCollection } from "../../firebaseHooks/useCollection";

const RecipesList = () => {
  // FIREBASE
  const { user } = useAuthContext();
  const { documents: recipes } = useCollection("recipes", ["uid", "==", user.uid]);
  // CONTEXT
  const _GlobalContext = useContext(GlobalContext);
  const { selectedRecipe, setSelectedRecipe } = _GlobalContext;
  return (
    <div className={styles.recipesList}>
      {recipes &&
        recipes.map((recipe, index) => (
          <div key={index} className={styles.recipeThumb} onClick={() => (recipe.id === selectedRecipe.id ? setSelectedRecipe(emptyRecipe) : setSelectedRecipe(recipe))}>
            {recipe.name}
          </div>
        ))}
    </div>
  );
};
export default RecipesList;
