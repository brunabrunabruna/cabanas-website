import "./App.css";
import HeroSection from "./components/HeroSection";
import FirstSection from "./components/FirstSection";
import QuoteHighlight1 from "./components/QuoteHighlight1";
import ShortDescriptions from "./components/ShortDescriptions";
import QuoteHighlight2 from "./components/QuoteHighlight2";
import ImgGallery from "./components/ImgGallery";
import Location from "./components/Location";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <FirstSection />
      <QuoteHighlight1 />
      <button>Faça sua Reserva</button>
      <ShortDescriptions />
      <QuoteHighlight2 />
      <ImgGallery />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
