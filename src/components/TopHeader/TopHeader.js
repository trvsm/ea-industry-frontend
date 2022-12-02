import "./TopHeader.scss";
import React from "react";
import EALogo  from "../../assets/logo/EALogo.png"
import { FaRegUser } from "react-icons/fa";
import { BiQuestionMark } from "react-icons/bi"

const TopHeader = () => {
    return (
      <header className="top-header">
        <ul className="top-header__menu">
          <li className="top-header__menu-item">
            <FaRegUser />
          </li>
          <li className="top-header__menu-item-question">
            <BiQuestionMark />
          </li>
          <img
            className="top-header__menu-logo"
            src={EALogo}
            alt="EA - Electronic Arts logo in gray"
          ></img>
        </ul>
      </header>
    );
}

export default TopHeader;
