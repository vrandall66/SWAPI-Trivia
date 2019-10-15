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
        <div className='drop-down-menu'>
          <div className='fav-buton-saber'>
            <Link to='/favorite-characters'>
              <button type="button" className="UserProfile__fav-characters"
              onClick={updateUserMenuState}> {favoriteCharacters.length} Favorite Characters</button>
            </Link>
            <Link to='/favorite-characters'>
              <div className='saberButt'></div>
            </Link>
          </div>
          <h5>{userFavQuote}</h5>
          <h5>{userRanking}</h5>
          <div className='fav-buton-saber'>
            <Link to='/'>
              <div className='saberButt sbleft'></div>
            </Link>
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
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
