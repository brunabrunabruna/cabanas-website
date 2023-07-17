import "./App.css";
import HeroSection from "./components/HeroSection";
import FirstSection from "./components/FirstSection";
import QuoteHighlight1 from "./components/QuoteHighlight1";
import ShortDescriptions from "./components/ShortDescriptions";

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <FirstSection />
      <QuoteHighlight1 />
      <button>Faça sua Reserva</button>
      <ShortDescriptions />
    </div>
  );
};

export default App;
