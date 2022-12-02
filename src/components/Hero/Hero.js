import "./Hero.scss";
import Banner from "../Banner/Banner";
import Carousel from "react-bootstrap/Carousel";
import battlefield from "../../assets/images/space.png";
import fifa from "../../assets/images/fifa.png";
import sims from "../../assets/images/sims.png";

export default function Hero() {
  return (
    <div className="view-height">
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__title">Introducing the EA App</h1>
          <p className="hero__text">
            Download the new app before January 2023 to get a free game, our
            gift to you!
          </p>
          <a
            target={"blank"}
            href="https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe"
            className="hero__cta"
          >
            Download the EA App
          </a>
        </div>
        <div className="hero__carousel">
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={battlefield}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={fifa} alt="Second slide" />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={sims} alt="Third slide" />

              <Carousel.Caption></Carousel.Caption>
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
