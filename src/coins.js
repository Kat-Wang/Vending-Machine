const inCoinhole = (event) => {
  const coinholeLocation = {
    left: document.getElementById("coinhole").getBoundingClientRect().left,
    top: document.getElementById("coinhole").getBoundingClientRect().top,
    bottom: document.getElementById("coinhole").getBoundingClientRect().bottom,
    right: document.getElementById("coinhole").getBoundingClientRect().right,
  };

  return (
    event.clientX > coinholeLocation.left &&
    event.clientX < coinholeLocation.right &&
    event.clientY < coinholeLocation.bottom &&
    event.clientY > coinholeLocation.top
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
      transform: `translate(${coinSize / 2 - sideSize / 2}px, ${
        coinSize / 2 - sideSize / 2
      }px) rotate3d(${0}, ${0}, ${1}, ${(360 / n) * i}deg) translate(${
        coinSize / 2 - sideSize / 2 + 2
      }px, ${0}px) rotateY(${90}deg)`,
    });
    return side;
  });

export const coins = () =>
  [...Array(5).keys()].map((i) => {
    const coin = document.createElement("div");

    coin.id = `${i}`;

    Object.assign(coin.style, {
      cursor: "pointer",
      position: "absolute",
      top: i * 40,
      // backgroundColor: "#ae70707a",
      /* backgroundImage: "url('./assets/coin.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat", */
      // backgroundPosition: "center",
      width: coinSize,
      height: coinSize,
      transformStyle: "preserve-3d",
      // transform: `rotateY(${40}deg)`,
      animation: "7s linear 0s infinite spin",
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
        if (inCoinhole(event)) {
          //check that mouse is in coinhole AND that there is no animation
          console.log("in the coinhole");
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      const onMouseUp = (event) => {
        document.removeEventListener("mousemove", onMouseMove);
        coin.onmouseup = null;
        document.body.style.cursor = "revert";
        coin.style.cursor = "pointer";
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
    transform: `translate(${0}px, ${0}px) translateX(${0}px) translateZ(${
      -sideSize / 2
    }px)`,
  });
  return bottom;
};
