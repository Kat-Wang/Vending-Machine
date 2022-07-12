export function highlight(left, top) {
  const highlight = document.createElement("img");

  highlight.id = "highlight";

  highlight.src = "./assets/button-highlight.png";

  document.body.append(highlight);

  Object.assign(highlight.style, {
    position: "absolute",
    left: left - 2,
    top: top - 2,
    pointerEvents: "none",
  });
}
