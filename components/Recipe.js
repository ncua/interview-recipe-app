import React from 'react';

const Recipe = props => {
  const { title, desc, calories, directions, ingredients } = props;

  return (
    <div className="recipe">
      <h2 className="recipe__title">{title}</h2>
      <div className="recipe__desc">{desc}</div>
      <div className="recipe__calories">Calories: {calories}</div>
      <div className="recipe__ingredients">{ingredients}</div>
      <div className="recipe__directions">Directions: {directions}</div>
    </div>
  );
};

export default Recipe;