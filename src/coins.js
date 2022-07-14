const movement = (coin, mouseX, mouseY) => {
  coin.style.top = mouseY - 19;
  coin.style.left = mouseX - 19;
};

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
    coin.onmousedown = function (event) {
      movement(coin, event.clientX, event.clientY);

      const onMouseMove = (event) => {
        movement(coin, event.clientX, event.clientY);
      };

      document.addEventListener("mousemove", onMouseMove);

      coin.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        coin.onmouseup = null;
      };
    };

    return coin;
  });
