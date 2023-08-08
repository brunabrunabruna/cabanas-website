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
      <button className="btn-reserve">
        <a
          href="https://www.airbnb.com.br/rooms/933206395690318249?adults=1&guests=1&viralityEntryPoint=1&s=76&source_impression_id=p3_1691520775_YrKhz7HIOJIeXmBt"
          target="_blank"
        >
          {" "}
          FAÇA SUA RESERVA
        </a>
      </button>
      <ShortDescriptions />
      <QuoteHighlight2 />
      <ImgGallery />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
