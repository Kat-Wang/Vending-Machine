import { vendingMachineLocation } from "./main.js";

export const vendingMachine = () => {
  const result = document.createElement("img");

  result.src = "./assets/machine.png";

  Object.assign(result.style, {
    position: "absolute",
    transform: `translate(${vendingMachineLocation.x}px,${vendingMachineLocation.y}px)`,
    width: 400,
    height: 600,
    margin: 0,
  });

  return result;
};
