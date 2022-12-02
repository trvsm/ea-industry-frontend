import "./TopHeader.scss";
import React from "react";
import EALogo from "../../assets/icons/EA.svg";
import Profile from "../../assets/icons/Profile.svg"
import Question from "../../assets/icons/Question.svg"

const TopHeader = () => {
  return (
    <header className="top-header">
      <ul className="top-header__menu">
        <img
          className="top-header__menu-item-profile"
          src={Profile}
          alt="Profile icon"
        ></img>
        <img
          className="top-header__menu-item-question"
          src={Question}
          alt="Profile icon"
        ></img>
        <img
          className="top-header__menu-logo"
          src={EALogo}
          alt="EA - Electronic Arts logo in gray"
        ></img>
      </ul>
    </header>
  );
};

export default TopHeader;
