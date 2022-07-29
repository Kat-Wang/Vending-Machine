import { backgroundSizes } from "./main.js";

export const inventory = (origin) => {
  const bigBoi = document.createElement("div");

  bigBoi.id = "bigBoi";

  Object.assign(bigBoi.style, {
    position: "absolute",
    height: 220,
    width: 48,
    backgroundColor: "red",
    left: origin.x + backgroundSizes.width / 2 + 40,
    top: origin.y + backgroundSizes.height / 2 - 220,
  });

  return bigBoi;
};

export const inventoryBoxes = [...Array(5).keys()].map((i) => {
  const box = document.createElement("div");

  Object.assign(box.style, {
    position: "absolute",
    top: i * 43 + 5,
    left: 5,
    width: 38,
    height: 38,
    backgroundColor: "white",
  });

  return box;
});
