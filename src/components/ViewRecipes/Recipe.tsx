// CSS, REACT ICONS --------------------------------------
import styles from "./Recipe.module.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
// LIBRARIES ---------------------------------------------
import { useMediaQuery } from "react-responsive";
// REACT -------------------------------------------------
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
// COMPONENTS----------------------------------------------
import SetOfIngredients from "./SetOfIngredients";
// MODULES ------------------------------------------------
import { emptyRecipe } from "../../modules/emptyRecipe";
import { emptyIngredient } from "../../modules/emptyIngredient";
// COMPONENT----------------------------------------------

const Recipe: React.FC = (props) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  // ------------------------------------------------------------------
  // PROPS-------------------------------------------------------------
  // ------------------------------------------------------------------
  // ------------------------------------------------------------------
  // CONTEXT------------------------------------------------------------
  // ------------------------------------------------------------------
  const _GlobalContext = useContext(GlobalContext);
  const { activateModal, selectedRecipe, setSelectedRecipe, selectedIngredient, setSelectedIngredient, totalIngredientsWeight } = _GlobalContext!;
  // USESTATES---------------------------------------------------------
  // ------------------------------------------------------------------
  // USEEFFECTS--------------------------------------------------------
  // ------------------------------------------------------------------

  // ACTIVATE MODAL
  useEffect(() => {
    if (selectedIngredient !== emptyIngredient) {
      activateModal("recalculatedRecipe", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIngredient]);

  return (
    <div className={`animate ${styles.recipe}`}>
      <div className={styles.row}>
        {isMobileScreen && <HiOutlineArrowLeft size={30} style={{ marginRight: "15px" }} className="backIcon" onClick={() => setSelectedRecipe(emptyRecipe)} />}
        <h1>{selectedRecipe.name}</h1>
      </div>
      <p>
        <span id="bold">Info: </span>
        {selectedRecipe.info}
      </p>
      <p>
        <span id="bold">Prep time: </span>
        {selectedRecipe.prepTime} minutes
      </p>
      <p>
        <span id="bold">Cook time: </span>
        {selectedRecipe.cookTime} minutes
      </p>
      <p>
        <span id="bold" style={{ cursor: "pointer" }} onClick={() => setSelectedIngredient({ name: "total", quantity: totalIngredientsWeight })}>
          Total weight:{" "}
        </span>
        {totalIngredientsWeight} grams
      </p>
      {selectedRecipe.setsOfIngredients.map((setOfIngredients, index) => (
        <SetOfIngredients
          key={index}
          setOfIngredients={setOfIngredients}
          setIndex={index}
          setsOfIngredientsLength={selectedRecipe.setsOfIngredients.length}
          selectedIngredient={selectedIngredient}
          setSelectedIngredient={setSelectedIngredient}
        />
      ))}
    </div>
  );
};

export default Recipe;
