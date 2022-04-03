// CSS, REACT ICONS --------------------------------------
import styles from "../../App.module.css";
// LIBRARIES ---------------------------------------------
import { useMediaQuery } from "react-responsive";
// REACT -------------------------------------------------
// COMPONENTS----------------------------------------------
import Footer from "./BoxB/Footer";
import Logo from "./BoxB/Logo";
import Nav from "./BoxB/Nav";
// MODULES ------------------------------------------------
// COMPONENT----------------------------------------------

export default function BoxB() {
  // MEDIA QUERIES
  const isBigScreen = useMediaQuery({ query: "(min-width: 1300px)" });
  function renderLessThan1300() {
    return (
      <div className={styles.boxB}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <Nav />
        </div>
      </div>
    );
  }
  function renderMoreThan1300() {
    return (
      <div className={styles.boxB}>
        <div className={styles.left}>
          <Logo />
          <Nav />
        </div>
        <div className={styles.right}>
          <Footer />
        </div>
      </div>
    );
  }

  return isBigScreen ? renderMoreThan1300() : renderLessThan1300();
}
