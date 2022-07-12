export const coinhole = ({ x, y }) => {
  const result = document.createElement("img");

  result.src = "./assets/coinhole.png";

  Object.assign(result.style, {
    position: "absolute",
    left: x + 125.5,
    top: y + 352,
    width: 66,
    height: 72,
  });

  return result;
};
