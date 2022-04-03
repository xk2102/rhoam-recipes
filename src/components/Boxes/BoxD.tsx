// CSS, REACT ICONS --------------------------------------
import styles from "../../App.module.css";
// LIBRARIES ---------------------------------------------
import { Routes, Route, Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
import Footer from "./BoxB/Footer";
import Home from "../Home";
import CreateARecipe from "../CreateARecipe";
import ViewRecipes from "../ViewRecipes";
// MODULES ------------------------------------------------
// FIREBASE-----------------------------------------------
import { Login } from "../FirebaseExamples/Login";
import { Register } from "../FirebaseExamples/Register";
// COMPONENT----------------------------------------------

export default function BoxD() {
  // MEDIA QUERIES
  const isBigScreen = useMediaQuery({ query: "(min-width: 1300px)" });
  return (
    <div className={styles.boxD}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CreateARecipe" element={<CreateARecipe />}></Route>
        <Route path="ViewRecipes" element={<ViewRecipes />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isBigScreen && <Footer />}
    </div>
  );
}
