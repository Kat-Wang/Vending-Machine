export function highlight(left, top) {
  const highlight = document.createElement("img");
  highlight.id = "highlight";
  highlight.src = "./assets/button-highlight.png";
  document.body.append(highlight);
  Object.assign(highlight.style, {
    position: "absolute",
    padding: 0,
    transform: `translate(${left - 2}px,${top - 2}px)`, //-10 because body margin is 8px and highlight is 2px wide
    pointerEvents: "none",
  });
}
