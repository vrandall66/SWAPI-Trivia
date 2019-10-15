import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form", () => {
  let wrapper, mockEvent, mockEvent2;
  const mockSearchFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form handleFormSubmit={mockSearchFunc} />);

    mockEvent = {
      target: {
        name: "name",
        value: "Matt"
      }
    };

    mockEvent2 = {
      target: {
        name: "favQuote",
        value: "I know"
      }
    };
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state on keydown of name input", () => {
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleChange(mockEvent2);

    expect(wrapper.state()).toEqual({
      name: "Matt",
      favQuote: "I know",
      error: false,
      ranking: "novice"
    });
  });

  it("should run handleSubmit on submit", () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate()
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleChange(mockEvent2);

    wrapper.find(".UserModalFormBtn").simulate("click");

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should not run handleSubmit on submit if state is empty', () => {
    wrapper.instance().handleSubmit = jest.fn()
    wrapper.instance().setState({
      name: "",
      favQuote: "",
      error: false,
      ranking: "novice"
    })

    wrapper.find(".UserModalFormBtn").simulate("click");

    expect(wrapper.instance().handleSubmit).not.toHaveBeenCalled();
  })
});