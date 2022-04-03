// CSS, REACT ICONS --------------------------------------
import styles from "../../App.module.css";
// LIBRARIES ---------------------------------------------
import { useMediaQuery } from "react-responsive";
// REACT -------------------------------------------------
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
// COMPONENTS----------------------------------------------
import BoxB from "./BoxB";
import BoxD from "./BoxD";
import BoxC from "./BoxC";
import Modal from "../../modal/Modal";
// MODULES ------------------------------------------------
// COMPONENT----------------------------------------------

export default function BoxA() {
  // CONTEXT
  const _GlobalContext = useContext(GlobalContext);
  const { showBoxC, modalIsOpen, modalContent, modalType, resetModal, setShowBoxC } = _GlobalContext!;
  // MEDIA QUERIES
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  // FUNCTIONS
  (function closeBoxCIfIEnlargeTheScreenWhileBeingAVeryOCDDeveloperThankYouBye() {
    !isMobileScreen && setShowBoxC(false);
  })();
  return (
    <div className={styles.boxA}>
      <Modal modalType={modalType} modalIsOpen={modalIsOpen} resetModal={resetModal} modalContent={modalContent}></Modal>
      <BoxB />
      {showBoxC && isMobileScreen && <BoxC />}
      <BoxD />
    </div>
  );
}
