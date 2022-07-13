export const coins = () =>
  [...Array(5).keys()].map((i) => {
    const coin = document.createElement("div");

    Object.assign(coin.style, {
      position: "absolute",
      top: i * 20,
      backgroundImage: "url('./assets/coin.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      // backgroundPosition: "center",
      width: 38,
      height: 38,
    });

    // coin.onmousedown = function (event) {
    //   //move coin under cursor
    //   movement(event.clientX, event.clientY)
    // };

    return coin;
  });
