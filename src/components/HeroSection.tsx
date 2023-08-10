import HeroImg from "../assets/img/hero-img.png";
import "./HeroSection.css";
// import Logo from "../assets/img/logo.png";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <img src={HeroImg} alt="" className="HeroImg" />
      {/* <img src={Logo} alt="" className="Logo" /> */}
    </div>
  );
};

export default HeroSection;
