import { background } from "./background.js";
import { buttons } from "./buttons/buttons.js";
import { vendingMachine } from "./vendingMachine.js";
import { coinhole } from "./coinhole.js";
import { coins } from "./coins.js";

export const body = document.body.getBoundingClientRect();

export const backgroundSizes = {
  width: 700,
  height: 700,
};

export const vendingMachineLocation = {
  x: body.width / 2 - 400 / 2,
  y: 10 + backgroundSizes.height / 2 - 600 / 2,
};

const mouseDown = (event, top, left) => {
  console.log(event);

  console.log(coin);
};

function main() {
  document.body.append(background());

  document.body.append(vendingMachine());

  document.body.append(...buttons().map(({ button }) => button));

  document.body.append(coinhole());

  document.body.append(...coins());
}

main();
