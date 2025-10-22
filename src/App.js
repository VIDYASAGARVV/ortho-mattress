import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import BannerSlider from './components/Banner';

export default function App() {
  return (
  <>
  <Navbar/>
  <BannerSlider   />
  
  <Products/>
  <AboutUs/>
  <Footer/>
  </>
  );
}

