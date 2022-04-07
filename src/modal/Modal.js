// https://www.youtube.com/watch?v=LyLa7dU5tp8

import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import { useState, useContext, useEffect } from "react";
import RecalculatedRecipe from "../components/ViewRecipes/RecalculatedRecipe";
import { GlobalContext } from "../contexts/GlobalContext";
import Logo from "../components/Boxes/BoxB/Logo";

export default function Modal({ modalIsOpen, resetModal, modalContent, modalType }) {
  const [multiplier, setMultiplier] = useState(1);
  const [newQuantity, setNewQuantity] = useState(0);

  const _GlobalContext = useContext(GlobalContext);
  const { selectedIngredient } = _GlobalContext;

  function onChange_handleNewQuantity(event) {
    if (isNaN(event.target.value) || event.target.value < 1) {
      setNewQuantity(0);
    } else {
      if (event.target.value.length < 7) {
        setNewQuantity(event.target.value);
      }
    }
  }

  useEffect(() => {
    if (newQuantity === 0) {
      setMultiplier(0);
    } else {
      setMultiplier(newQuantity / selectedIngredient.quantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newQuantity]);

  const renderAlertSeverity3Modal = () => {
    return (
      <div className={`${styles.modal} animate`}>
        <div className={styles.header}>
          <Logo />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <label>{`New ${selectedIngredient.name} quantity (was ${selectedIngredient.quantity}): `}</label>
          </div>
          <div className={styles.row}>
            <input type="number" maxLength="6" min="1" value={newQuantity} onChange={(event) => onChange_handleNewQuantity(event)}></input>
            <label>grams</label>
          </div>
          <RecalculatedRecipe multiplier={multiplier} />
          {modalContent}
        </div>
        <div className={styles.footer}>
          <button
            className={styles.alert5Button}
            data-cy="modal-close-button"
            onClick={() => {
              setNewQuantity(0);
              resetModal();
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    );
  };
  if (!modalIsOpen) return null;
  return ReactDom.createPortal(
    <>
      <div className={`animate ${styles.overlay}`} />
      {modalType === "recalculatedRecipe" && renderAlertSeverity3Modal()}
    </>,
    document.getElementById("portal")
  );
}
