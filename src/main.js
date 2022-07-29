import { background } from "./background.js";
import { vendingMachine } from "./vendingMachine.js";
import { coins, sides, topSide, bottomSide } from "./coins.js";
import { lever } from "./lever.js";
import { inventory, inventoryBoxes } from "./inventory.js";

Object.assign(document.body.style, {
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
});

export const backgroundSizes = {
  width: 700,
  height: 700,
};

function main() {
  const body = document.body.getBoundingClientRect();

  document.body.draggable = false;

  const origin = {
    x: body.width / 2,
    y: body.height / 2,
  };

  //color testing code
  /*  const box = document.createElement("div");
  box.style.position = "absolute";
  box.style.width = 100;
  box.style.height = 100;
  box.style.backgroundColor = "#1b3c4b6b";
  document.body.append(box); */

  document.body.append(
    background(origin),
    ...vendingMachine(origin),
    ...coins(origin),
    lever(origin),
    inventory(origin),
    Object.assign(document.createElement("style"), {
      textContent: `
      @keyframes spin {
        to {
          transform: rotateY(360deg);
        }
      }
      @keyframes pay {
        to {
          transform: rotateX(90deg);
        }
      }
      `,
    })
  );

  [...Array(5).keys()].forEach((i) => {
    document.getElementById(`${i}`).append(...sides(), bottomSide(), topSide());
  });

  document.getElementById("bigBoi").append(...inventoryBoxes);

  const pip = document.createElement("img");
  pip.src = "./assets/piplup.png";
  document.getElementById("bigBoi").append(pip);
  Object.assign(pip.style, {
    position: "absolute",
    top: 6,
    left: 6,
    width: 22,
    height: 31.5,
  });
}

new ResizeObserver(() => {
  document.body.innerHTML = "";

  main();
}).observe(document.body);

// const bigBoi = document.createElement("div");
// Object.assign(bigBoi.style, {
//   width: 38,
//   height: 38,
//   backgroundColor: "blue",
// transformStyle: "preserve-3d",
// transform: `translate(${50}px,${50}px) rotateX(${15}deg)`,
// });

// document.body.append(bigBoi);

// const n = 30;

// const sides = [...Array(n).keys()].map((i) => {
//   const side = document.createElement("div");
//   Object.assign(side.style, {
//     position: "absolute",
//     left: 0,
//     top: 0,
//     // background: "url('./assets/coin.png')",
//     backgroundColor: "#4c4d59",
//     backgroundSize: "contain",
//     backgroundRepeat: "no-repeat",
//     width: 3.8,
//     height: 3.8,
//     transform: `translate(${15.2}px, ${15.2}px) rotate3d(${0}, ${0}, ${1}, ${
//       (360 / n) * i
//     }deg) translate(${15.2}px, ${0}px) rotateY(${90}deg)`,
//   });
//   return side;
// });

// const top = document.createElement("div");
// Object.assign(top.style, {
//   position: "absolute",
//   width: 400,
//   height: 400,
//   background: "url('./assets/coin.png')",
//   // backgroundColor: "blue",
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   transform: `translate(${50}px, ${50}px) translateX(${-25}px) translateZ(${30}px)`,
// });

// const bottom = document.createElement("div");
// Object.assign(bottom.style, {
//   position: "abosulte",
//   width: 400,
//   height: 400,
//   background: "url('./assets/coin.png')",
//   // backgroundColor: "red",
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   transform: `translate(${50}px, ${50}px) translateX(${-25}px) translateZ(${-15}px)`,
// });

// bigBoi.append(...sides);
// // bigBoi.append(top);
// // bigBoi.append(bottom);
