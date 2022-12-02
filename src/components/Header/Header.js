import "./Header.scss";
import { Link } from "react-router-dom";
import Image from "../../assets/images/Electronic-arts.png"
import { BsThreeDotsVertical} from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__icon">
          <BsThreeDotsVertical />
        </div>

        <img
          className="header__image"
          src={Image}
          alt="Electronic Arts text in pink and purple"
        ></img>
        <ul className="header__list">
          <Link to="#" className="header__text">
            Games <AiOutlineDown />
          </Link>

          <Link to="#" className="header__text">
            More Experiences <AiOutlineDown />
          </Link>
          
          <Link to="#" className="header__text">
            About <AiOutlineDown />
          </Link>

          <Link to="#" className="header__text">
            Commitments <AiOutlineDown />
          </Link>
          
          <Link to="#" className="header__text">
            Resources <AiOutlineDown />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
