import { backgroundSizes } from "./main.js";

const inCoinhole = (event) => {
  const coinholeLocation = ((
    coinhole = document.getElementById("coinhole").getBoundingClientRect()
  ) => ({
    length: coinhole.right - coinhole.left,
    height: coinhole.bottom - coinhole.top,
    left: coinhole.left,
    top: coinhole.top,
    bottom: coinhole.bottom,
    right: coinhole.right,
  }))();

  return (
    event.clientX > coinholeLocation.left + coinholeLocation.length / 4 &&
    event.clientX < coinholeLocation.right - coinholeLocation.length / 4 &&
    event.clientY < coinholeLocation.bottom - coinholeLocation.height / 4 &&
    event.clientY > coinholeLocation.top + coinholeLocation.height / 4
  );
};

const n = 30;
const sideSize = 4;
const coinSize = 38;

export const sides = () =>
  [...Array(n).keys()].map((i) => {
    const side = document.createElement("div");
    Object.assign(side.style, {
      position: "absolute",
      left: 0,
      top: 0,
      // background: "url('./assets/coin.png')",
      backgroundColor: "#4c4d59",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: sideSize,
      height: sideSize,
      pointerEvents: "none",
      transform: `translate(${coinSize / 2 - sideSize / 2}px, ${
        coinSize / 2 - sideSize / 2
      }px) rotate3d(${0}, ${0}, ${1}, ${(360 / n) * i}deg) translate(${
        coinSize / 2 - sideSize / 2 + 2
      }px, ${0}px) rotateY(${90}deg)`,
    });
    return side;
  });

export const coins = (origin) =>
  [...Array(5).keys()].map((i) => {
    const coin = document.createElement("div");

    coin.id = `${i}`;

    coin.draggable = false;

    Object.assign(coin.style, {
      cursor: "pointer",
      position: "absolute",
      top: origin.y - backgroundSizes.height / 2 + 10 + i * 40,
      left: origin.x - backgroundSizes.width / 2 + 10,
      // backgroundColor: "#ae70707a",
      /* backgroundImage: "url('./assets/coin.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat", */
      // backgroundPosition: "center",
      width: coinSize,
      height: coinSize,
      transformStyle: "preserve-3d",
      animation: "7s linear infinite spin",
    });

    coin.onmousedown = function (event) {
      // event.stopPropagation();
      // coin.style.zIndex = 1000;
      const xDistance = event.clientX - coin.getBoundingClientRect().left;
      const yDistance = event.clientY - coin.getBoundingClientRect().top;

      const movement = (coin, mouseX, mouseY) => {
        coin.style.top = mouseY - yDistance + "px";
        coin.style.left = mouseX - xDistance + "px";
      };

      const onMouseMove = (event) => {
        movement(coin, event.clientX, event.clientY);
        document.body.style.cursor = "grab";
        coin.style.cursor = "grab";
      };

      document.addEventListener("mousemove", onMouseMove);

      const onMouseUp = (event) => {
        document.removeEventListener("mousemove", onMouseMove);
        document.body.style.cursor = "revert";
        coin.style.cursor = "pointer";

        if (inCoinhole(event)) {
          coin.style.animation = ".2s linear forwards pay";
          coin.addEventListener("animationend", () => {
            coin.remove();
          });
        }

        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mouseup", onMouseUp);
    };

    return coin;
  });

export const topSide = () => {
  const top = document.createElement("div");
  Object.assign(top.style, {
    position: "absolute",
    width: coinSize,
    height: coinSize,
    background: "url('./assets/coin.png')",
    // backgroundColor: "blue",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    pointerEvents: "none",
    transform: `translate(${0}px, ${0}px) translateX(${0}px) translateZ(${
      sideSize / 2
    }px)`,
  });
  return top;
};

export const bottomSide = () => {
  const bottom = document.createElement("div");
  Object.assign(bottom.style, {
    top: 0,
    left: 0,
    position: "absolute",
    width: coinSize,
    height: coinSize,
    background: "url('./assets/coin.png')",
    // backgroundColor: "red",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    pointerEvents: "none",
    transform: `translate(${0}px, ${0}px) translateX(${0}px) translateZ(${
      -sideSize / 2
    }px)`,
  });
  return bottom;
};
