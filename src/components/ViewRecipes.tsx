// CSS, REACT ICONS --------------------------------------
import styles from "./ViewRecipes.module.css";
// LIBRARIES ---------------------------------------------
import { Link } from "react-router-dom";
// REACT -------------------------------------------------
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
// COMPONENTS----------------------------------------------
import Recipe from "./ViewRecipes/Recipe";
import RecipesList from "./ViewRecipes/RecipesList";
// MODULES ------------------------------------------------
// FIREBASE -----------------------------------------------
import { useAuthContext } from "../firebaseHooks/useAuthContext";

export default function ViewRecipes() {
  // AUTH CONTEXT
  const { user } = useAuthContext();
  // GLOBAl CONTEXT
  const _GlobalContext = useContext(GlobalContext);
  const { selectedRecipe } = _GlobalContext!;
  // ------------------------------------------------------------------
  // RENDERS-----------------------------------------------------------
  // ------------------------------------------------------------------
  const render_user = () => {
    return (
      <div className={styles.viewRecipes}>
        <h1>Available recipes</h1>
        {<RecipesList />}
      </div>
    );
  };
  const render_notUser = () => {
    return (
      <div className={styles.viewRecipes}>
        <h1>Available recipes</h1>
        <p>
          Please <Link to="/Login">🔗login</Link> or <Link to="/Register">🔗register</Link> before you use the app..!
        </p>
      </div>
    );
  };
  const render_recipe = () => {
    return <Recipe />;
  };
  // ------------------------------------------------------------------
  // RETURN -----------------------------------------------------------
  // ------------------------------------------------------------------
  if (user) {
    if (selectedRecipe.name === "") {
      return render_user();
    } else {
      return render_recipe();
    }
  } else {
    return render_notUser();
  }
}
