import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { name } = useParams();

  // Convert URL param name to match the keys in recipeData
  const recipeName = name ? name.replace(/-/g, ' ').toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) : '';

  const recipeData = {
    "Lamb Biryani": {
      title: "Lamb Biryani",
      image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
      ingredients: ["Lamb", "Basmati Rice", "Onions", "Tomatoes", "Spices", "Yogurt"],
      directions: "In a large pot, cook the lamb with spices until tender. Prepare basmati rice and layer it with the lamb mixture. Cook on low heat to let the flavors blend. Serve with yogurt or raita."
    },
    "Dal Fry": {
      title: "Dal Fry",
      image: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
      ingredients: ["Lentils", "Onions", "Tomatoes", "Spices", "Garlic", "Ginger"],
      directions: "Boil lentils until soft. In a pan, sauté onions, tomatoes, garlic, and ginger with spices, then mix with the cooked lentils. Simmer for a few minutes before serving."
    },
    "Tandoori Chicken": {
      title: "Tandoori Chicken",
      image: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
      ingredients: ["Chicken", "Yogurt", "Tandoori Masala", "Lemon", "Spices"],
      directions: "Marinate the chicken in yogurt, spices, and lemon juice. Grill or bake until fully cooked, then serve hot with naan or rice."
    },
    "Chicken Enchilada Casserole": {
      title: "Chicken Enchilada Casserole",
      image: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
      ingredients: ["Chicken", "Tortillas", "Cheese", "Enchilada Sauce", "Onions"],
      directions: "Layer tortillas, chicken, cheese, and enchilada sauce in a baking dish. Bake at 375°F for 30 minutes or until bubbly and golden."
    },
    "Cajun Spiced Fish Tacos": {
      title: "Cajun Spiced Fish Tacos",
      image: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      ingredients: ["Fish Fillets", "Taco Shells", "Cajun Seasoning", "Cabbage", "Lime"],
      directions: "Season fish fillets with Cajun spices and cook until golden. Serve in taco shells with shredded cabbage and a squeeze of lime."
    },
    "Braised Beef Chilli": {
      title: "Braised Beef Chilli",
      image: "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
      ingredients: ["Beef", "Tomatoes", "Beans", "Chili Powder", "Onions", "Garlic"],
      directions: "Brown beef with onions and garlic, then add tomatoes, beans, and spices. Simmer until the beef is tender and the flavors develop."
    },
    "Pad See Ew": {
      title: "Pad See Ew",
      image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
      ingredients: ["Rice Noodles", "Soy Sauce", "Egg", "Broccoli", "Chicken"],
      directions: "Stir-fry chicken and broccoli in soy sauce. Add rice noodles and egg, then stir-fry until everything is cooked through."
    },
    "Thai Green Curry": {
      title: "Thai Green Curry",
      image: "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
      ingredients: ["Coconut Milk", "Green Curry Paste", "Chicken", "Vegetables", "Basil"],
      directions: "Sauté curry paste, then add coconut milk, chicken, and vegetables. Simmer until the chicken is cooked and the curry is thickened. Garnish with fresh basil."
    },
    "Massaman Beef Curry": {
      title: "Massaman Beef Curry",
      image: "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
      ingredients: ["Beef", "Potatoes", "Coconut Milk", "Massaman Curry Paste", "Peanuts"],
      directions: "Slow-cook beef with potatoes, massaman curry paste, and coconut milk until tender. Serve with rice and sprinkle with peanuts."
    }
  };

  // Fetch the recipe based on the name
  const recipe = recipeData[recipeName];

  // Handle case when recipe is not found
  if (!recipe) {
    return (
      <div className="p-5 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-red-600">Recipe not found</h1>
        <p>Sorry, we couldn't find the recipe you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#6B705C] mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full mb-4 rounded-md" />
      <div>
        <h2 className="text-lg font-semibold text-[#6B705C]">Ingredients</h2>
        <ul className="list-disc list-inside text-left">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-[#6B705C] mt-4">Directions</h2>
        <p className="text-left">{recipe.directions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
