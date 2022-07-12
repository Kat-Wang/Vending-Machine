import { highlight } from "./highlight.js";
import { unhighlight } from "./unhighlight.js";
import { selectDrink } from "./selectDrink.js";
import { vendingMachineLocation } from "../main.js";

export const buttons = () =>
  [...Array(21).keys()].map((i) => {
    const button = document.createElement("button");

    const left = vendingMachineLocation.x + 60 + (i % 7) * (28 + 14);

    const top = vendingMachineLocation.y + 120 + Math.floor(i / 7) * (86 + 12);

    Object.assign(button.style, {
      padding: 0,
      position: "absolute",
      border: "none",
      background: "url('./assets/button.png')",
      width: 28,
      height: 12,
      transform: `translate(${left}px,${top}px)`,
    });

    button.addEventListener(
      "mouseover",
      (_, potato = console.log({ i, top, left })) => highlight(left, top)
    );

    button.addEventListener("click", () => selectDrink(i));

    button.addEventListener("mouseout", () => unhighlight());

    return { button, i, left, top };
  });
