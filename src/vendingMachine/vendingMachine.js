import { buttons } from "./buttons/buttons.js";
import { coinhole } from "./coinhole.js";

const size = {
  height: 600,
  width: 400,
};

export const vendingMachine = (origin) => {
  const result = document.createElement("img");

  result.src = "./assets/machine.png";

  const vendingMachineLocation = {
    x: origin.x - size.width / 2,
    y: origin.y - size.height / 2,
  };

  Object.assign(result.style, {
    position: "absolute",
    left: vendingMachineLocation.x,
    top: vendingMachineLocation.y,
    ...size,
    userSelect: "none",
  });

  return [
    result,
    ...buttons(vendingMachineLocation).map(({ button }) => button),
    coinhole(vendingMachineLocation),
  ];
};
