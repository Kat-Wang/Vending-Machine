export const coins = () =>
  [...Array(5).keys()].map((i) => {
    const coin = document.createElement("div");

    Object.assign(coin.style, {
      backgroundImage: "url('./assets/coin.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      // backgroundPosition: "center",
      width: 38,
      height: 38,
    });

    coin.addEventListener("mousedown", (event) => mouseDown(event, top, left));

    coin.addEventListener("dragstart", (event) => console.log("dragging"));

    coin.addEventListener("dragend", (event) => console.log("dragend"));

    return coin;
  });
