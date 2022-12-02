import "./CallToAction.scss";
import blue from "../../assets/images/blue.svg";
import circle from "../../assets/images/circle.svg";
import green from "../../assets/images/green.svg";
import red from "../../assets/images/red.svg";

export default function CallToAction() {
  return (<>
    <div className="cta">
      <span className="cta__copy">
        <div>
          What are you waiting for?
          </div>
          Try out our new and improved app now!
      </span>
      <a
        href="https://origin-a.akamaihd.net/EA-Desktop-Client-Download/installer-releases/EAappInstaller.exe"
        target={"blank"}
        className="cta__button"
      >
        Download the EA App
      </a>
    </div>
      <div className="cta__images">
        <img src={blue} className='cta__blue' alt="blue" />
        <img src={green} className='cta__green' alt="green" />
        <img src={red} className='cta__red' alt="red" />
        <img src={circle} className='cta__circle' alt="circle" />
      </div>
  </>
  );
}
