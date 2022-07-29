import { highlight } from "./highlight.js";
import { unhighlight } from "./unhighlight.js";
import { displayInfo, removeDisplayInfo, selectDrink } from "./selectDrink.js";

const size = {
  leftSpace: 60,
  topSpace: 120,
  width: 28,
  height: 12,
  xDisplacement: 14,
  yDisplacement: 86,
};

export const buttons = (vendingMachineLocation) =>
  [...Array(21).keys()].map((i) => {
    const button = document.createElement("button");

    const left =
      vendingMachineLocation.x +
      size.leftSpace +
      (i % 7) * (size.width + size.xDisplacement);

    const top =
      vendingMachineLocation.y +
      size.topSpace +
      Math.floor(i / 7) * (size.height + size.yDisplacement);

    Object.assign(button.style, {
      padding: 0,
      position: "absolute",
      border: "none",
      background: "url('./assets/button.png')",
      width: 28,
      height: 12,
      left,
      top,
    });

    button.addEventListener("mouseover", () => highlight(left, top));
    button.addEventListener("mouseover", () => displayInfo(i, left, top));

    button.addEventListener("click", () => selectDrink(i));

    button.addEventListener("mouseout", () => unhighlight());
    button.addEventListener("mouseout", () => removeDisplayInfo());

    return { button, i, left, top };
  });
