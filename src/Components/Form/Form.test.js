import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form", () => {
  let wrapper;
  const mockSearchFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form handleFormSubmit={mockSearchFunc} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state.name on keydown of name input", () => {
    const mockEvent = {
      target: {
        name: "name",
        value: "Matt"
      }
    };

    const mockEvent2 = {
      target: {
        name: "favQuote",
        value: "I know"
      }
    };

    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleChange(mockEvent2);

    expect(wrapper.state()).toEqual({
      name: "Matt",
      favQuote: "I know",
      error: false,
      ranking: "novice"
    });
  });
});
