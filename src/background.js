import { body, backgroundSizes } from "./main.js";

export const background = () => {
  const result = document.createElement("div");

  Object.assign(result.style, {
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

  return result;
};
