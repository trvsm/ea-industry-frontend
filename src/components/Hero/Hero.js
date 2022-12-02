import "./Hero.scss";
import Banner from "../Banner/Banner";

export default function Hero() {
  return (
    <div className="view-height">
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__title">The EA App</h1>
          <p className="hero__text">we have a new app</p>
          <button className="hero__cta">use it!</button>
        </div>
        <div className="carousel">
          <div className="carousel__inner">carousel</div>
        </div>
      </div>
      <Banner />
    </div>
  );
}
