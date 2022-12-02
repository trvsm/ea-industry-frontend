import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <p className="banner__text">
        The EA App is replacing Origin. Download now to recieve your free game,
        on us!
      </p>
      <button className="banner__cta">START PLAYING NOW!</button>
    </div>
  );
}
