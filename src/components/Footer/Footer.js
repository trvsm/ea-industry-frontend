import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import Flag from "../../assets/icons/Canada-Flag.svg";
import Ea from "../../assets/images/EA.svg"
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="ffooterr">
      <div className="ffooterr__wrap">
        <div className="ffooterr__logo-div">
          <img className="ffooterr__logo"
          src={Ea}
          alt="EA rounded logo in pink">

          </img>
        </div>

        <div className="ffooterr__content">
          <div className="ffooterr__main">
            <div className="ffooterr__main-links">
              <Link className="ffooterr__link">Game Library</Link>
              <Link className="ffooterr__link">Subscribe</Link>
              <Link className="ffooterr__link">Redeem Code</Link>
              <Link className="ffooterr__link">EA App</Link>
              <Link className="ffooterr__link">About</Link>
              <Link className="ffooterr__link">Accessibility</Link>
              <Link className="ffooterr__link">Help</Link>
            </div>

            <div className="ffooterr__main-language">
              <div className="ffooterr__box">
                <div className="ffooterr__box-text">Language</div>
                <div className="ffooterr__box-drop">
                  <img
                    src={Flag}
                    alt="Country Flag"
                    className="ffooterr__drop-flag"
                  />
                  <div className="ffooterr__drop-text">Canada</div>
                  <div className="ffooterr__drop-arrow">
                    <AiOutlineDown />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ffooterr__links-sec-div">
            <div className="ffooterr__links-sec">
              <Link className="ffooterr__link-sec">Legal & Privacy</Link>
              <Link className="ffooterr__link-sec">User Agreement</Link>
            </div>

            <div className="ffooterr__links-sec">
              <Link className="ffooterr__link-sec">
                Privacy & Cookie Policy (Your Privacy Rights)
              </Link>
              <Link className="ffooterr__link-sec">Online Service Updates</Link>
            </div>

            <div className="ffooterr__links-sec">
              <Link className="ffooterr__link-sec">Security</Link>
              <Link className="ffooterr__link-sec">YouTube Terms of Service</Link>
              <Link className="ffooterr__link-sec">Google Privacy Policy</Link>
            </div>

            <div className="ffooterr__copy">
              <p className="ffooterr__copy-text">© 2022 Electronic Arts Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
