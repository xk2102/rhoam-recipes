// CSS, REACT ICONS --------------------------------------
import styles from "../../App.module.css";
// LIBRARIES ---------------------------------------------
import { Link, useLocation } from "react-router-dom";
// REACT -------------------------------------------------
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { emptyRecipe } from "../../modules/emptyRecipe";
// COMPONENT----------------------------------------------

export default function BoxC() {
  // CONTEXT
  const _GlobalContext = useContext(GlobalContext);
  const { setShowBoxC, setSelectedRecipe } = _GlobalContext!;
  const { pathname } = useLocation();
  return (
    <div className={`animate ${styles.boxC}`}>
      <div className={pathname === "/" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link to="/" onClick={() => setShowBoxC(false)}>
          Home
        </Link>
      </div>
      <div className={pathname === "/CreateARecipe" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link to="/CreateARecipe" onClick={() => setShowBoxC(false)}>
          Create a recipe
        </Link>
      </div>
      <div className={pathname === "/ViewRecipes" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link
          to="/ViewRecipes"
          onClick={() => {
            setShowBoxC(false);
            setSelectedRecipe(emptyRecipe);
          }}>
          View recipes
        </Link>
      </div>
    </div>
  );
}
