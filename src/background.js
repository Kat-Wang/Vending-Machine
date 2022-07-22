import { backgroundSizes } from "./main.js";

export const background = (origin) => {
  const result = document.createElement("div");

  Object.assign(result.style, {
    position: "absolute",
    left: origin.x - backgroundSizes.width / 2,
    top: origin.y - backgroundSizes.height / 2,
    backgroundColor: "indianred",
    pointerEvents: "none",
    width: `${backgroundSizes.width}px`,
    height: `${backgroundSizes.height}px`,
  });

  return result;
};
