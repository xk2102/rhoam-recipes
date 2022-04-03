export type ingredient = {
  name: string;
  quantity: number;
};

export type step = {
  name: string;
};

export type setOfIngredients = {
  ingredients: ingredient[];
  steps: step[];
};

export type recipe = {
  id?: string;
  name: string;
  info: string;
  prepTime: number;
  cookTime: number;
  setsOfIngredients: setOfIngredients[];
};
