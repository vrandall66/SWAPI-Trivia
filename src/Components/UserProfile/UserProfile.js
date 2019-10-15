import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import inactiveHamMenu from "../../images/inactiveHamMenu.png";
import activeHamMenu from "../../images/activeHamMenu.png";

const UserProfile = ({
  isOpen,
  userName,
  userFavQuote,
  userRanking,
  userFavCharacters,
  updateUserMenuState,
  userLogoutReset,
  favoriteCharacters
}) => {
  return (
    <div className="UserProfile">
      <div className="UserProfile--userMenu">
        <h1 className="UserProfile--userName">{userName}</h1>
        <input
          type="image"
          alt="User Profile Dropdown Menu Icon"
          src={isOpen ? activeHamMenu : inactiveHamMenu}
          className="UserProfile__hamburger-icon"
          onClick={updateUserMenuState}
        />
      </div>
      {isOpen ? (
        <div>
          <Link to='/favorite-characters'>
            <button type="button" className="UserProfile__button--sign-out"
            onClick={updateUserMenuState}> {favoriteCharacters.length} Favorite Characters</button>
          </Link>
          <h5>{userFavQuote}</h5>
          <h5>{userRanking}</h5>
          {/* <h5>{[userFavCharacters]}</h5> */}
          <Link to="/">
            <button
              type="button"
              className="UserProfile__button--sign-out"
              onClick={() => {
                userLogoutReset() 
                updateUserMenuState()
              }}
            >
              Sign out
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
