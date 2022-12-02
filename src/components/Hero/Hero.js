import "./Hero.scss";
import Banner from "../Banner/Banner";
import Carousel from "react-bootstrap/Carousel";

export default function Hero() {
  return (
    <div className="view-height">
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__title">The EA App</h1>
          <p className="hero__text">we have a new app</p>
          <button className="hero__cta">use it!</button>
        </div>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={require('../../assets/images/Upload-video-preview.jpg')}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
              />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <Banner />
        </div>
  );
}
