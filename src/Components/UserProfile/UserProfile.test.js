import React from "react";
import { shallow } from "enzyme";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  let wrapper1;
  let wrapper2;
  let isOpen1 = false;
  let isOpen2 = true;
  let name = "Matt";
  let userFavQuote = "I know";
  let userRanking = "Intermediate";
  let favoriteCharacters = [];
  let updateUserMenuState = jest.fn();
  let userLogoutReset = jest.fn();

  beforeEach(() => {
    wrapper1 = shallow(
      <UserProfile
        isOpen={isOpen1}
        userName={name}
        userFavQuote={userFavQuote}
        userRanking={userRanking}
        favoriteCharacters={favoriteCharacters}
        updateUserMenuState={updateUserMenuState}
        userLogoutReset={userLogoutReset}
      />
    );

    wrapper2 = shallow(
      <UserProfile
        isOpen={isOpen2}
        userName={name}
        userFavQuote={userFavQuote}
        userRanking={userRanking}
        favoriteCharacters={favoriteCharacters}
        updateUserMenuState={updateUserMenuState}
        userLogoutReset={userLogoutReset}
      />
    );
  });

  it("should match the snapshot while isOpen prop is false", () => {
    expect(wrapper1).toMatchSnapshot();
  });

  it("should match the snapshot while isOpen prop is true", () => {
    expect(wrapper2).toMatchSnapshot();
  });

  it("should call updateUserMenuState onClick of hamburger menu button", () => {
    wrapper1.find('.UserProfile--userName').simulate('click')
    
    expect(updateUserMenuState).toHaveBeenCalled();
  })

  it("should call updateUserMenuState onClick of favorite characters button", () => {
    wrapper2.find('.UserProfile__fav-characters').simulate('click')

    expect(updateUserMenuState).toHaveBeenCalled();
  })

  it('should call userLogoutReset and updateUserMenuState onClick of user sign out button', () => {
    wrapper2.find('.UserProfile__button--sign-out').simulate('click')

    expect(updateUserMenuState).toHaveBeenCalled();
    expect(userLogoutReset).toHaveBeenCalled();
  })
});
