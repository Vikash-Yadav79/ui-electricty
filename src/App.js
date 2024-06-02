import './App.css';
import Header from './components/header/Header';
import FeaturedCategories from './components/pages/FeaturedCategories';
import SuggestedProducts from './components/pages/Suggested Products';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <FeaturedCategories />
      <SuggestedProducts />
      <Footer />
    </>
  );
}

export default App;
