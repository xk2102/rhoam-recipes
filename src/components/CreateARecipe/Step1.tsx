// CSS, REACT ICONS --------------------------------------
import styles from "./Step1.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
import { useState } from "react";
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { emptyRecipe } from "../../modules/emptyRecipe";
import { recipe } from "../../modules/types";
import { InputRow } from "../InputRow";
// COMPONENT----------------------------------------------

const Step1: React.FC<{ step: number; setStep: React.Dispatch<React.SetStateAction<number>>; recipe: recipe; setRecipe: React.Dispatch<React.SetStateAction<recipe>> }> = (props) => {
  // PROPS
  const { step, setStep, recipe, setRecipe } = props;
  // STATE
  const [name, setName] = useState(recipe.name);
  const [info, setInfo] = useState(recipe.info);
  const [prepTime, setPrepTime] = useState(() => {
    if (recipe.prepTime.toString() === "0") {
      return "";
    } else {
      return recipe.prepTime.toString();
    }
  });
  const [cookTime, setCookTime] = useState(() => {
    if (recipe.cookTime.toString() === "0") {
      return "";
    } else {
      return recipe.cookTime.toString();
    }
  });

  const [nameError, setNameError] = useState<string>("");
  const [infoError, setInfoError] = useState<string>("");
  const [prepTimeError, setPrepTimeError] = useState<string>("");
  const [cookTimeError, setCookTimeError] = useState<string>("");
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------
  function onChange_handleRecipe(event: React.ChangeEvent<HTMLInputElement>): void {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "info":
        setInfo(event.target.value);
        break;
      case "prepTime":
        setPrepTime(event.target.value);
        break;
      case "cookTime":
        setCookTime(event.target.value);
        break;
      default:
      // default
    }
  }
  function onClick_handleReset(): void {
    setName("");
    setInfo("");
    setPrepTime("");
    setCookTime("");
    setRecipe(emptyRecipe);
    // setError(null);
  }
  function proceed() {
    let _nameError = "";
    let _infoError = "";
    let _prepTimeError = "";
    let _cookTimeError = "";
    setNameError("");
    setInfoError("");
    setPrepTimeError("");
    setCookTimeError("");

    if (name === "") {
      _nameError = "empty-name";
      setNameError("empty-name");
    } else {
      _nameError = "ok";
      setNameError("ok");
    }
    if (info === "") {
      _infoError = "empty-info";
      setInfoError("empty-info");
    } else {
      _infoError = "ok";
      setInfoError("ok");
    }
    if (isNaN(parseInt(prepTime))) {
      _prepTimeError = "nan-prepTime";
      setPrepTimeError("nan-prepTime");
    } else {
      _prepTimeError = "ok";
      setPrepTimeError("ok");
    }
    if (isNaN(parseInt(cookTime))) {
      _cookTimeError = "nan-cookTime";
      setCookTimeError("nan-cookTime");
    } else {
      _cookTimeError = "ok";
      setCookTimeError("ok");
    }

    if (_nameError === "ok" && _infoError === "ok" && _prepTimeError === "ok" && _cookTimeError === "ok") {
      setRecipe((prevRecipe) => ({ ...prevRecipe, name: name, info: info, prepTime: parseInt(prepTime), cookTime: parseInt(cookTime) }));
      setStep(step + 1);
    }
  }
  return (
    <div className={`animate ${styles.step}`}>
      <div className={styles.top}>
        <h2>Let's start with: </h2>
        <InputRow label="Name" name="name" type="text" value={name} handleValue={(event) => onChange_handleRecipe(event)} valueError={nameError} />
        <InputRow label="Info" name="info" type="text" value={info} handleValue={(event) => onChange_handleRecipe(event)} valueError={infoError} />
        <InputRow label="prep Time (mins)" type="number" name="prepTime" value={prepTime} handleValue={(event) => onChange_handleRecipe(event)} valueError={prepTimeError} />
        <InputRow label="cook Time (mins)" type="number" name="cookTime" value={cookTime} handleValue={(event) => onChange_handleRecipe(event)} valueError={cookTimeError} />
        {nameError === "empty-name" && <p className={styles.error}>Please provide a name..!</p>}
        {infoError === "empty-info" && <p className={styles.error}>Please provide some info..!</p>}
        {prepTimeError === "nan-prepTime" && <p className={styles.error}>Prep time should be a number..!</p>}
        {cookTimeError === "nan-cookTime" && <p className={styles.error}>Cook time should be a number..!</p>}
      </div>
      <div className={styles.bottom}>
        <div className={styles.row}>
          <button id={styles.clear} onClick={() => onClick_handleReset()}>
            CLEAR
          </button>
          <button id={styles.next} onClick={() => proceed()}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Step1;
