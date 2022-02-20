import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DogButton from "./DogButton";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<DogButton dogName="boxer"/>, container);
    });
    expect(container.textContent).toBe("boxer");

    act(() => {
        render(<DogButton />, container);
    });
    expect(container.textContent).toBe("click");
});
