import React from "react";
import "./UserProfile.css";
import hamburgerIcon from "../../images/HamburgerIcon.png";

const UserProfile = ({
  isOpen,
  userName,
  userFavQuote,
  userRanking,
  userFavCharacters,
  updateUserMenuState
}) => {
  return (
    <div className="UserProfile">
      <div className="UserProfile--userMenu">
        <h1>{userName}</h1>
        <input
          type="image"
          alt="User Profile Dropdown Menu Icon"
          src={hamburgerIcon}
          className="UserProfile__hamburger-icon"
          onClick={updateUserMenuState}
        />
      </div>
      {isOpen ? (
        <div>
          <h5>{userFavQuote}</h5>
          <h5>{userRanking}</h5>
          <h5>{userFavCharacters}</h5>
          <button type="button" className="UserProfile__button--sign-out">
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
