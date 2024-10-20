import React from 'react'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Welcome to Recipe Finder
      </h2>
      <h3 className="text-2xl font-semibold mb-6">Discover Recipes by Cuisine</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Mexican Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link
              to="/cuisine/Mexican"
              className="bg-blue-600 text-white py-2 w-full text-lg rounded-lg hover:bg-blue-500 transition-colors"
            >
              Mexican Cuisine
            </Link>
            <img
              src="https://blog.amigofoods.com/wp-content/uploads/2020/09/mexican-food-1024x683.jpg"
              alt="Mexican Cuisine"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Indian Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link
              to="/cuisine/Indian"
              className="bg-green-600 text-white py-2 w-full text-lg rounded-lg hover:bg-green-500 transition-colors"
            >
              Indian Cuisine
            </Link>
            <img
              src="https://cdn.vox-cdn.com/thumbor/8fZR_P4E2OCgm3T99Y-5ABG7Mx4=/0x0:7360x4912/920x613/filters:focal(3092x1868:4268x3044):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67000785/shutterstock_1435374326.0.jpg"
              alt="Indian Cuisine"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Thai Cuisine */}
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <Link
              to="/cuisine/Thai"
              className="bg-yellow-600 text-white py-2 w-full text-lg rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Thai Cuisine
            </Link>
            <img
              src="https://thumbor.thebear.group/unsafe/1110x555/https://directus-deskthebear.s3.ap-southeast-1.amazonaws.com/uploads/7481fb8c-94a9-4d50-9db7-08092b7b4b62.jpeg"
              alt="Thai Cuisine"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
