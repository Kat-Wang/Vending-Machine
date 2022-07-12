import { background } from "./background.js";
import { vendingMachine } from "./vendingMachine/vendingMachine.js";
import { coins } from "./coins.js";

Object.assign(document.body.style, {
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
});

export const backgroundSizes = {
  width: 700,
  height: 700,
};

function main() {
  const body = document.body.getBoundingClientRect();

  const origin = {
    x: body.width / 2,
    y: body.height / 2,
  };

  document.body.append(
    background(origin),
    ...vendingMachine(origin),
    ...coins()
  );
}

new ResizeObserver(() => {
  document.body.innerHTML = "";

  main();
}).observe(document.body);
