import "./Slider.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const slideData = [
  { image: "assets/Slide1.webp", heading: "Pesca", category: "Pesca" },
  { image: "assets/Slide2.webp", heading: "Camping", category: "Camping" },
];

//import { Link } from "react-router-dom";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLenght = slideData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <div className="HomeContainer">
      <div className="slider">
        <ArrowBackIcon className="arrow prev" onClick={prevSlide} />
        <ArrowForwardIcon className="arrow next" onClick={nextSlide} />
        {slideData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div className="slideWidth">
                  <img className="imageSlide" src={slide.image} alt="Slide" />
                  <div className="content">
                    <h2>{slide.heading}</h2>
                    <Link to={`/${slide.category}`}>
                      <button className="ButtonVerMas">Ver mas</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
