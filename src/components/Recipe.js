import React from "react";
import { IngredientsList } from "./IngredientsList";

const Recipe = ({ name, ingredients }) => {
  return (
    <>
      ====================
      <h3>{name}</h3>
      <IngredientsList ingredients={ingredients} />
      ====================
      <br />
    </>
  );
};

export default Recipe;
