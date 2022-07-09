import {
  drinks,
  highlightButton,
  unhighlightButton,
  selectDrink,
} from "./SupportingFunctions.js";

const body = document.body.getBoundingClientRect();

const backgroundSizes = {
  width: 700,
  height: 700,
};

const background = document.createElement("div");
Object.assign(background.style, {
  position: "absolute",
  display: "block",
  left: 0,
  top: 0,
  transform: `translate(${
    body.width / 2 - backgroundSizes.width / 2
  }px,${20}px)`,
  backgroundColor: "indianred",
  width: `${backgroundSizes.width}px`,
  height: `${backgroundSizes.height}px`,
  margin: 0,
});

const vendingMachineLocation = {
  x: body.width / 2 - 400 / 2,
  y: 10 + backgroundSizes.height / 2 - 600 / 2,
};

const vendingMachine = document.createElement("img");
vendingMachine.src = "./machine.png";
Object.assign(vendingMachine.style, {
  position: "absolute",
  transform: `translate(${vendingMachineLocation.x}px,${vendingMachineLocation.y}px)`,
  width: 400,
  height: 600,
  margin: 0,
});

document.body.append(background);
document.body.append(vendingMachine);

const buttons = [...Array(21).keys()].map((i) => {
  const button = document.createElement("button");
  const left = vendingMachineLocation.x + 60 + (i % 7) * (28 + 14);
  const top = vendingMachineLocation.y + 120 + Math.floor(i / 7) * (86 + 12);
  Object.assign(button.style, {
    padding: 0,
    position: "absolute",
    border: "none",
    background: "url('./button.png')",
    width: 28,
    height: 12,
    transform: `translate(${left}px,${top}px)`,
  });
  button.addEventListener("mouseover", () => highlightButton(left, top));
  button.addEventListener("click", () => selectDrink(i));
  button.addEventListener("mouseout", () => unhighlightButton());
  return { button, i, left, top };
});

buttons.forEach((button) => {
  button.button = document.body.append(button.button);
});

// const coin = [...Array(5).keys()]

// {

//   wdith 26
// }
