// BootstrapCarousel.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// image import
import slide1 from "../../../assets/images/slider/gptrobot1.jpg";
import slide2 from "../../../assets/images/slider/gptRobot2.jpg";
import slide3 from "../../../assets/images/slider/gptRobot3.jpg";

const HomeSlider = () => {
  return (
    <Carousel className="home_slider" style={{ marginTop: "16px" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;
