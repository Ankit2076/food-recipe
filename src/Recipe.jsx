import React from 'react';
import './Recipe.css';
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="Recipe">
      <div className="recipe-content">
        <h1>{title}</h1>
        <div className="food-img">
          <img src={image} alt=""></img>
          <p>Calories: {calories}</p>
        </div>
        <ul>
          {ingredients.map((ingredient) => (
            <li><p>{ingredient.text}</p></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;