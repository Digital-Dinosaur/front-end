import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../store";

import Nav from "./index.js";

describe("Testing the Nav", () => {
  
  test("Should render the Nav", () => {
    render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );

    let element = screen.getByTestId("nav");

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});
