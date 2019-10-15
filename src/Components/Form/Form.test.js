import React from "react";
import { shallow } from "enzyme";
import { Form } from "./Form";

describe("Form", () => {
  let wrapper, mockEvent, mockEvent2;
  const mockSearchFunc = jest.fn();
  const historyMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form handleFormSubmit={mockSearchFunc} history={historyMock}/>);

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
      ranking: "Novice"
    });
  });

  it("should run handleSubmit on submit", () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleChange(mockEvent2);

    wrapper.find(".UserModalFormBtn").simulate("click");

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it("should not run handleFormSubmit on handleSubmit if state is empty", () => {
    wrapper.instance().handleSubmit();

    expect(mockSearchFunc).not.toHaveBeenCalled();
  });

});
