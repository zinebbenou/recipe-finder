import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundRecipes, setFoundRecipes] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const performSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const result = await response.json();

      if (result.meals) {
        setFoundRecipes(result.meals);
        setErrorMsg('');
      } else {
        setFoundRecipes([]);
        setErrorMsg('No recipes were found. Please try a different search term.');
      }
    } catch (error) {
      setErrorMsg('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <form onSubmit={performSearch} className="flex shadow-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a recipe..."
          className="p-2 rounded-l-lg text-gray-800 outline-none"
          style={{
            backgroundColor: '#A5C8E1', // Soft blue background color
            color: 'black', // Text color for contrast
            width: '300px',
            height: '40px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        />
        <button
          type="submit"
          className="p-2 bg-gray-600 text-white rounded-r-lg hover:bg-gray-700 transition-colors"
          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        >
          Search
        </button>
      </form>
      {errorMsg && (
        <p className="text-red-500 mt-4 text-center">{errorMsg}</p>
      )}
      <div className="recipe-list mt-4">
        {foundRecipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-item p-4 border rounded mb-2">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-32 h-32 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
