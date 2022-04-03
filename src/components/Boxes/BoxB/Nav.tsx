// CSS, REACT ICONS --------------------------------------
import styles from "./Nav.module.css";
// LIBRARIES ---------------------------------------------
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// REACT -------------------------------------------------
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
// COMPONENTS----------------------------------------------
import NavIcon from "./NavIcon";
// MODULES ------------------------------------------------
import { emptyRecipe } from "../../../modules/emptyRecipe";
// COMPONENT----------------------------------------------
export default function Nav() {
  // CONTEXT
  const _GlobalContext = useContext(GlobalContext);
  const { showBoxC, setShowBoxC } = _GlobalContext!;

  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  if (isMobileScreen) {
    return (
      <div className={styles.nav} onClick={() => setShowBoxC(!showBoxC)}>
        <NavIcon />
      </div>
    );
  } else {
    return (
      <div className={styles.nav}>
        <NavList />
      </div>
    );
  }
}

function NavList() {
  // CONTEXT
  const _GlobalContext = useContext(GlobalContext);
  const { setSelectedRecipe } = _GlobalContext!;
  // NAVIGATION
  const { pathname } = useLocation();
  return (
    <div className={styles.navList}>
      <div className={pathname === "/" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link to="/" onClick={() => setSelectedRecipe(emptyRecipe)}>
          Home
        </Link>
      </div>
      <div className={pathname === "/CreateARecipe" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link to="/CreateARecipe" onClick={() => setSelectedRecipe(emptyRecipe)}>
          Create a recipe
        </Link>
      </div>
      <div className={pathname === "/ViewRecipes" ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}>
        <Link to="/ViewRecipes" onClick={() => setSelectedRecipe(emptyRecipe)}>
          View recipes
        </Link>
      </div>
    </div>
  );
}
