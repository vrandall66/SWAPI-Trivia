import React from "react";
import { shallow } from "enzyme";
import ScrollingText from "./ScrollingText";

describe("ScrollingText", () => {
  let wrapper;
  let episode = {
    characters: [],
    created: "",
    director: "",
    edited: "",
    episode_id: 0,
    opening_crawl: "",
    planets: [],
    producer: "",
    releaseDate: "",
    species: [],
    starships: [],
    title: "The Phantom Menace",
    url: "",
    vehicles: []
  };

  beforeEach(() => {
    wrapper = shallow(<ScrollingText episode={episode} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
