import React from "react";
import { shallow } from "enzyme";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  let wrapper;
  let isOpen = false;
  let name = "Matt";
  let userFavQuote = "I know";
  let userRanking = "Intermediate";
  let userFavCharacters = [];
  let updateUserMenuState = jest.fn();
  let userLogoutReset = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <UserProfile
        isOpen={isOpen}
        userName={name}
        userFavQuote={userFavQuote}
        userRanking={userRanking}
        userFavCharacters={userFavCharacters}
        updateUserMenuState={updateUserMenuState}
        userLogoutReset={userLogoutReset}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
