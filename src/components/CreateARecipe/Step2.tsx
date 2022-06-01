// CSS, REACT ICONS --------------------------------------
import styles from "./Step2.module.css";
// LIBRARIES ---------------------------------------------
// REACT -------------------------------------------------
import { useState } from "react";
// COMPONENTS----------------------------------------------
// MODULES ------------------------------------------------
import { ingredient, recipe, step } from "../../modules/types";
import { InputRow } from "../InputRow";
// COMPONENT----------------------------------------------

// --------------------------------------------------------------
// --TYPES-------------------------------------------------------
// --------------------------------------------------------------
type Step2Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  recipe: recipe;
  setRecipe: React.Dispatch<React.SetStateAction<recipe>>;
};
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
const Step2 = ({ step, setStep, recipe, setRecipe }: Step2Props) => {
  // --------------------------------------------------------------
  // --STATE-------------------------------------------------------
  // --------------------------------------------------------------

  // const [ingredientss, setIngredientss] = useState([...recipe.setsOfIngredients[0].ingredients]);
  // const [steps, setSteps] = useState([...recipe.setsOfIngredients[0].steps]);

  const copyA = JSON.parse(JSON.stringify(recipe.setsOfIngredients[recipe.setsOfIngredients.length - 1].ingredients)) as ingredient[];
  const copyB = JSON.parse(JSON.stringify(recipe.setsOfIngredients[recipe.setsOfIngredients.length - 1].steps)) as step[];

  const [ingredientss, setIngredientss] = useState(copyA);
  const [steps, setSteps] = useState(copyB);

  const [ingredientsError, setIngredientsError] = useState<string>("");
  const [stepsError, setStepsError] = useState<string>("");

  // useEffect(() => console.log("ingredients: ", ingredientss), [ingredientss]);
  // useEffect(() => console.log("steps: ", steps), [steps]);
  // --------------------------------------------------------------
  // --HANDLERS----------------------------------------------------
  // --------------------------------------------------------------

  const onChange_handleIngredients = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let temp = ingredientss;
    switch (event.target.name) {
      case "data":
        temp[index].name = event.target.value;
        break;
      case "quantity":
        if (event.target.value === "") {
          temp[index].quantity = 0;
        } else {
          temp[index].quantity = parseInt(event.target.value);
        }
        break;
      default:
      // default
    }
    setIngredientss([...temp]);
  };

  const onChange_handleSteps = (event: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    let temp = steps;
    temp[index].name = event.target.value;
    setSteps([...temp]);
  };

  const onClick_addAnIngredient = () => {
    let items = ingredientss;
    items.push({ name: "", quantity: 0 });
    setIngredientss([...items]);
  };
  const onClick_removeAnIngredient = () => {
    if (ingredientss.length > 1) {
      let items = ingredientss;
      items.pop();
      setIngredientss([...items]);
    }
  };
  const onClick_addAStep = () => {
    let items = steps;
    items.push({ name: "" });
    setSteps([...items]);
  };
  const onClick_removeAStep = () => {
    if (steps.length > 1) {
      let items = steps;
      items.pop();
      setSteps([...items]);
    }
  };

  const proceed = () => {
    let _ingredientsError = "";
    let _stepsError = "";
    setIngredientsError("");
    setStepsError("");

    ingredientss.forEach((ingredient, index) => {
      if (ingredient.name === "" || ingredient.quantity === 0) {
        _ingredientsError = `empty-ingredients`;
        setIngredientsError("empty-ingredients");
      }
    });
    steps.forEach((step, index) => {
      if (step.name === "") {
        _stepsError = `empty-steps`;
        setStepsError("empty-steps");
      }
    });

    if (_ingredientsError === "") {
      _ingredientsError = "ok";
      setIngredientsError("ok");
    }
    if (_stepsError === "") {
      _stepsError = "ok";
      setStepsError("ok");
    }

    if (_ingredientsError === "ok" && _stepsError === "ok") {
      let temp_recipe = recipe;
      let temp_setOfIngredients = {
        ingredients: [...ingredientss],
        steps: [...steps],
      };

      temp_recipe.setsOfIngredients[recipe.setsOfIngredients.length - 1] = temp_setOfIngredients;

      setRecipe({ ...temp_recipe });

      setStep(step + 1);
    }
  };

  return (
    <div className={`animate ${styles.step}`}>
      <div className={styles.top}>
        <div className={styles.header_row}>
          <h2>Set of ingredients</h2>
        </div>

        {ingredientss.map((ingredient, index) => (
          <div className={styles.ingredient_row} key={index}>
            <div className={styles.ingredient_index}>{index + 1}</div>
            <div className={styles.ingredient_name}>{<InputRow label="Name" name="data" type="text" value={ingredient.name} handleValue={(event) => onChange_handleIngredients(event, index)} />}</div>
            <div className={styles.ingredient_quantity}>
              {<InputRow label="Quantity (grams)" name="quantity" type="number" value={ingredient.quantity} handleValue={(event) => onChange_handleIngredients(event, index)} />}
            </div>
          </div>
        ))}

        <div className={styles.ingredients_buttons_row}>
          <div className={styles.left}>{ingredientsError === "empty-ingredients" && <p className={`animate ${styles.ingredients_error}`}>Please fill all the ingredient fields..!</p>}</div>
          <div className={styles.right}>
            <button id={styles.minus} onClick={() => onClick_removeAnIngredient()}>
              -
            </button>
            <button id={styles.plus} onClick={() => onClick_addAnIngredient()}>
              +
            </button>
          </div>
        </div>

        <div className={styles.header_row}>
          <h2>Set of steps</h2>
        </div>

        {steps.map((step, index) => (
          <div className={styles.step_row} key={index}>
            <div className={styles.step_index}>{index + 1}</div>
            <div className={styles.step_name}>{<InputRow label="Description" name="step" type="text" value={step.name} handleValue={(event) => onChange_handleSteps(event, index)} />}</div>
          </div>
        ))}

        <div className={styles.steps_buttons_row}>
          <div className={styles.left}>{stepsError === "empty-steps" && <p className={`animate ${styles.steps_error}`}>Please fill all the step fields..!</p>}</div>
          <div className={styles.right}>
            <button id={styles.minus} onClick={() => onClick_removeAStep()}>
              -
            </button>
            <button id={styles.plus} onClick={() => onClick_addAStep()}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <button id={styles.back} onClick={() => setStep(1)}>
          BACK
        </button>
        <button id={styles.next} onClick={() => proceed()}>
          NEXT
        </button>
      </div>
    </div>
  );
};
export default Step2;
