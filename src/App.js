import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CuisinePage from './pages/CuisinePage';
import RecipeDetail from './pages/RecipeDetail';
import AboutUs from './pages/AboutUs'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">  
      <Router>
        {/* The header should always be visible */}
        <Header />

        {/* SearchBar visible on all pages under the header */}
        <SearchBar />

        
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cuisine/:type" element={<CuisinePage />} />
            <Route path="/recipe/:name" element={<RecipeDetail />} />
            <Route path="/about-us" element={<AboutUs />} /> 
          </Routes>
        </div>

        {/* The footer should always be visible */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
