import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const CuisinePage = () => {
  const { type: cuisineType } = useParams(); 

  const cuisines = {
    Indian: [
      {
        name: "Lamb Biryani", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
      },
      {
        name: "Dal Fry", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
      },
      {
        name: "Tandoori Chicken", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
      },
    ],
    Mexican: [
      {
        name: "Chicken Enchilada Casserole", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
      },
      {
        name: "Cajun Spiced Fish Tacos", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      },
      {
        name: "Braised Beef Chilli", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
      },
    ],
    Thai: [
      {
        name: "Pad See Ew", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
      },
      {
        name: "Thai Green Curry", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
      },
      {
        name: "Massaman Beef Curry", // Removed leading space
        image: "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
      },
    ],
  };

  const recipes = cuisines[cuisineType] || [];

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4 text-[#6B705C]">{cuisineType} Cuisine</h1>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#6B705C]">
          {recipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[#6B705C]">No recipes available for this cuisine.</p>
      )}
    </div>
  );
};

export default CuisinePage;
