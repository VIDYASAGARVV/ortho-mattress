import './App.css';
import Navbar from './components/Navbar';
import BannerSlider from './components/Banner';
import Products from './pages/Products';
import VideoPlayer from './components/VideoPlayer';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

export default function App() {
  return (
  <>
  <Navbar/>
  <BannerSlider/>
  
  <Products/>
  <AboutUs/>
  <Footer/>
  </>
  );
}

