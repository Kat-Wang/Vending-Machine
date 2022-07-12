export const coinhole = () => {
  const result = document.createElement("img");

  result.src = "./assets/coinhole.png";

  Object.assign(result.style, {
    position: "absolute",
    transform: `translate(${325}px, ${412}px)`,
    width: 66,
    height: 72,
  });

  return result;
};
