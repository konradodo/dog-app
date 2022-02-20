import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DogModal from "./DogModal";

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

it("renders open modal", () => {
    act(() => {
        render(<DogModal open={true} dogName="boxer"/>, container);
    });
    let h1 = document.querySelector('.dog-modal__header')
    expect(h1.innerHTML).toBe("boxer");

    act(() => {
        render(<DogModal open={false} dogName="boxer"/>, container);
    });
    h1 = document.querySelector('.dog-modal__header')
    expect(h1).toBe(null);
});
