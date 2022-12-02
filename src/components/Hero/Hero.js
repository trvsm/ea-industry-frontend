import "./Hero.scss";
import Banner from "../Banner/Banner";
import Carousel from "react-bootstrap/Carousel";
import space from '../../assets/images/space.png';
import fifa from '../../assets/images/fifa.png'
import sims from '../../assets/images/sims.png'

export default function Hero() {
  return (
    <div className="view-height">
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__title">Introducing the EA App for Windows/PC</h1>
          <p className="hero__text">
            Download the new app before January 2023 to get a free game, our
            gift to you!
          </p>
          <a
            target={"blank"}
            href="https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe"
            className="hero__cta"
          >
            Download
          </a>
        </div>
        <div className="hero__carousel">

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
              src={require("../../assets/images/Upload-video-preview.jpg")}
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
      </div>
      <Banner
        content={{
          text: "The EA App is replacing Origin. Learn More about the transition from other players who made the switch",
          button: "Community Hub",
          target:
            "https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe",
        }}
      />
    </div>
  );
}
