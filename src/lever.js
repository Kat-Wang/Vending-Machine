import { backgroundSizes } from "./main.js";

export const lever = (origin) => {
  const result = document.createElement("div");

  Object.assign(result.style, {
    position: "absolute",
    background: "url('./assets/lever.png')",
    left: origin.x - backgroundSizes.width / 2,
    top: origin.y - backgroundSizes.height / 2,
    width: 69,
    height: 63,
    transform: `translate(${190}px, ${415}px)`,
  });

  return result;
};
