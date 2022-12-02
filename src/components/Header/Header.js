import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">LOGO</div>
        {/* <ul className="header__ul"> */}
          {/* <Link to="#" className="header__link">
            Link One
          </Link>
          <Link to="#" className="header__link">
            Link two
          </Link>
          <Link to="#" className="header__link">
            Link three
          </Link>
          <Link to="#" className="header__link">
            Link four
          </Link>
          <Link to="#" className="header__link">
            Link five
          </Link>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
