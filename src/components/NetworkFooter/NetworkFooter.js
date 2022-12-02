import "./NetworkFooter.scss";
import facebook from '../../assets/icons/Facebook.svg';
import instagram from "../../assets/icons/Instagram.svg";
import twitch from "../../assets/icons/Twitch.svg";
import twitter from "../../assets/icons/Twitter.svg";
import youtube from "../../assets/icons/Youtube.svg";


export default function NetworkFooter() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__links">
          <a
            target={"blank"}
            href="https://www.ea.com/careers"
            className="footer__link"
          >
            Careers
          </a>
          <a
            target={"blank"}
            href="https://www.ea.com/executives"
            className="footer__link"
          >
            Executives
          </a>
          <a
            target={"blank"}
            href="https://www.ea.com/news/2022-impact-report"
            className="footer__link"
          >
            Impact Report
          </a>
          <a
            target={"blank"}
            href="https://www.ea.com/commitments"
            className="footer__link"
          >
            Our Commitments
          </a>
          <a
            target={"blank"}
            href="https://www.ea.com/brand-partnerships"
            className="footer__link"
          >
            Partner With Us
          </a>
        </div>
        <div className="footer__signup">
          <form className="footer__form" action="submit">
            <p className="footer__form-label">
              Sign up for new game release updates
              </p>
            <input className="footer__input" placeholder="Email" type="text" />
          </form>
        </div>
      </div>
      <div className="footer__social">
        <h3 className="footer__title">Join the Conversation</h3>
        <div className="footer__social-link">
          <a target={'blank'} href="http://facebook.com/EA" className="footer__icon">
            <img src={facebook} alt="facebook" className="footer__social-media" />
          </a>
          <a target={'blank'} href="http://twitter.com/ea" className="footer__icon">
            <img src={twitter} alt="twitter" className="footer__social-media" />
          </a>
          <a target={'blank'} href="http://youtube.com/EAvideos" className="footer__icon">
            <img src={youtube} alt="youtube" className="footer__social-media" />
          </a>
          <a target={'blank'} href="http://instagram.com/ea" className="footer__icon">
            <img src={instagram} alt="insta" className="footer__social-media" />
          </a>
          <a target={'blank'} href="http://twitch.tv/ea" className="footer__icon">
            <img src={twitch} alt="twitch" className="footer__social-media" />
          </a>
        </div>
      </div>
    </div>
  );
}
