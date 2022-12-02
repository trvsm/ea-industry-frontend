import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import EAlogo from "../../assets/logo/EALogo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__logo-div">
          <div className="footer__logo"></div>
        </div>

        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__main-links">
              <Link className="footer__link">Game Library</Link>
              <Link className="footer__link">Subscribe</Link>
              <Link className="footer__link">Redeem Code</Link>
              <Link className="footer__link">EA App</Link>
              <Link className="footer__link">About</Link>
              <Link className="footer__link">Accessibility</Link>
              <Link className="footer__link">Help</Link>
            </div>

            <div className="footer__main-language">
              <div className="footer__box">
                <div className="footer__box-text">Language</div>
                <div className="footer__box-drop">
                  <img
                    src={EAlogo}
                    alt="Country Flag"
                    className="footer__drop-flag"
                  />
                  <div className="footer__drop-text">United States</div>
                  <div className="footer__drop-arrow">
                    <AiOutlineDown />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__links-sec-div">
            <div className="footer__links-sec">
              <Link className="footer__link-sec">Legal & Privacy</Link>
              <Link className="footer__link-sec">User Agreement</Link>
            </div>

            <div className="footer__links-sec">
              <Link className="footer__link-sec">
                Privacy & Cookie Policy (Your Privacy Rights)
              </Link>
              <Link className="footer__link-sec">Online Service Updates</Link>
            </div>

            <div className="footer__links-sec">
              <Link className="footer__link-sec">Security</Link>
              <Link className="footer__link-sec">YouTube Terms of Service</Link>
              <Link className="footer__link-sec">Google Privacy Policy</Link>
            </div>

            <div className="footer__copy">
              <p className="footer__copy-text">© 2022 Electronic Arts Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
