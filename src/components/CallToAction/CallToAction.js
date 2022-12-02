import "./CallToAction.scss";
import blue from "../../assets/images/blue.svg";
import circle from "../../assets/images/circle.svg";
import green from "../../assets/images/green.svg";
import red from "../../assets/images/red.svg";

export default function CallToAction() {
  return (
    <div className="cta">
      <span className="cta__copy">
        What are you waiting for? Try out our new and improved app now!
      </span>
      <a
        href="https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe"
        target={"blank"}
        className="cta__button"
      >
        Download the EA App
      </a>
      <div className="cta__images">
        <img src={blue} alt="" />
        <img src={green} alt="" />
        <img src={red} alt="" />
        <img src={circle} alt="" />
      </div>
    </div>
  );
}
