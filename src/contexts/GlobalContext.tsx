import React, { useState, createContext, useEffect } from "react";
import { emptyIngredient } from "../modules/emptyIngredient";
import { emptyRecipe } from "../modules/emptyRecipe";
import { ingredient, recipe } from "../modules/types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};
type GlobalContextType = {
  showBoxC: boolean;
  setShowBoxC: React.Dispatch<React.SetStateAction<boolean>>;
  // MODAL
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: any;
  setModalContent: React.Dispatch<React.SetStateAction<any>>;
  modalType: string | null;
  setModalType: React.Dispatch<React.SetStateAction<string | null>>;
  resetModal: () => void;
  activateModal: (_modalType: string | null, _modalContent: any) => void;
  // VIEW RECIPE
  selectedRecipe: recipe;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<recipe>>;
  selectedIngredient: ingredient;
  setSelectedIngredient: React.Dispatch<React.SetStateAction<ingredient>>;
  totalIngredientsWeight: number;
  showTip: boolean;
  setShowTip: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  // ---------------------------------------------
  // --STATE--------------------------------------
  // ---------------------------------------------
  const [showBoxC, setShowBoxC] = useState<boolean>(false);
  // ------------------------------------------------------
  // --MODAL-----------------------------------------------
  // ------------------------------------------------------
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  function resetModal() {
    setModalIsOpen(false);
    setModalContent(null);
    setModalType(null);
    setSelectedIngredient(emptyIngredient);
  }
  function activateModal(_modalType: string | null, _modalContent: any) {
    setModalIsOpen(true);
    setModalType(_modalType);
    setModalContent(_modalContent);
  }
  // ------------------------------------------------------
  // --VIEW RECIPE-----------------------------------------
  // ------------------------------------------------------
  const [selectedRecipe, setSelectedRecipe] = useState<recipe>(emptyRecipe);
  const [selectedIngredient, setSelectedIngredient] = useState<ingredient>(emptyIngredient);
  const [totalIngredientsWeight, setTotalIngredientsWeight] = useState<number>(0);
  useEffect(() => {
    let total = 0;
    selectedRecipe.setsOfIngredients.forEach((setOfIngredients) => {
      setOfIngredients.ingredients.forEach((ingredient) => {
        total = total + ingredient.quantity;
      });
    });
    setTotalIngredientsWeight(total);
  }, [selectedRecipe]);
  const [showTip, setShowTip] = useState<boolean>(true);
  return (
    <GlobalContext.Provider
      value={{
        showBoxC,
        setShowBoxC,
        // MODAL
        modalIsOpen,
        setModalIsOpen,
        modalContent,
        setModalContent,
        modalType,
        setModalType,
        resetModal,
        activateModal,
        // VIEW RECIPE
        selectedRecipe,
        setSelectedRecipe,
        selectedIngredient,
        setSelectedIngredient,
        totalIngredientsWeight,
        showTip,
        setShowTip,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
