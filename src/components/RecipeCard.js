
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
 
  const recipeUrl = recipe.name.replace(/\s+/g, '-');

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Link to={`/recipe/${recipeUrl}`}>
        <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{recipe.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
