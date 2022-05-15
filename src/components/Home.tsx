// CSS, REACT ICONS --------------------------------------
import styles from "./Home.module.css";
// LIBRARIES ---------------------------------------------
import { Link } from "react-router-dom";
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
// FIREBASE -----------------------------------------------
import { useAuthContext } from "../firebaseHooks/useAuthContext";
import { useLogout } from "../firebaseHooks/useLogout";

export default function Home() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className={styles.home}>
      <h1>Welcome to the Rhoam Recipes 🎂 App..!</h1>
      <p>
        <Link to="/CreateARecipe">Create</Link> a recipe! Then, <Link to="/ViewRecipes">view</Link> it for production..!
      </p>
      <p>You can modify the ingredient quantities based on a single ingredient or the total weight of all ingredients.</p>

      {!user && (
        <p>
          Please <Link to="/Login">🔗login</Link> or <Link to="/Register">🔗register</Link> before you use the app..!
        </p>
      )}

      {user && (
        <p>
          Logged in as {user.email}. [
          <Link to="#" onClick={() => logout()}>
            {` logout `}
          </Link>
          ]
        </p>
      )}
    </div>
  );
}
