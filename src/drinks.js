export const displayInfo = (i, left, top) => {
  const display = document.createElement("div");

  display.id = "display";

  Object.assign(display.style, {
    position: "absolute",
    backgroundColor: "rgb(4 13 18 / 75%)",
    left: left - 71,
    top: top - 125,
    width: 170,
    height: 110,
    borderStyle: "double",
    borderColor: "#374450",
  });

  document.body.append(display);

  const title = document.createElement("p");

  title.innerHTML = `<b>${drinkNames[i]}<b>`;

  Object.assign(title.style, {
    position: "absolute",
    left: 10,
    fontFamily: "sans-serif",
    color: "#a2e5fb",
    fontSize: 15,
  });

  display.append(title);

  const price = document.createElement("p");

  price.innerHTML = "¥100";

  Object.assign(price.style, {
    position: "absolute",
    left: 10,
    top: 25,
    fontFamily: "sans-serif",
    color: "white",
    fontSize: 14,
  });

  display.append(price);

  const desc = document.createElement("p");

  desc.innerHTML = `${drinkDescs[i]}`;

  Object.assign(desc.style, {
    position: "absolute",
    left: 10,
    top: 50,
    fontFamily: "sans-serif",
    color: "white",
    fontSize: 12,
  });
  display.append(desc);
};

export const removeDisplayInfo = () => {
  document.getElementById("display").remove();
};

export const selectDrink = (i) => {
  if (moneySpent > 0) {
    moneySpent -= 1;

    console.log(`Bought ${drinkNames[i]}`);

    const drink = document.createElement("img");
    drink.id = drink.src = `${drinkSrcs[i]}`;

    document.getElementById(`box${totalSpent}`).append(drink);

    Object.assign(drink.style, {
      position: "absolute",
      top: 2,
      left: 2,
      width: 34,
      height: 34,
      imageRendering: "pixelated",
      objectFit: "contain",
    });
    totalSpent += 1;
  }
};

export const drinkNames = {
  0: "Bubble Beam Bottle",
  1: "Bubble Beam Bottle",
  2: "Turtwig Tea",
  3: "Turtwig Tea",
  4: "Banana Milk",
  5: "Banana Milk",
  6: "Apple Juice",
  7: "KipKip Juice",
  8: "KipKip Juice",
  9: "Pocari Seel",
  10: "Pocari Seel",
  11: "Roost",
  12: "Roost",
  13: "Jumplush",
  14: "Can o' Peas",
  15: "Can o' Peas",
  16: "Gengy Juice",
  17: "Gengy Juice",
  18: "Teleport",
  19: "Teleport",
  20: "Venonat",
};

export const drinkDescs = {
  0: "Cool, fresh water from Lake Verity. Piplups like to play in it.",
  1: "Cool, fresh water from Lake Verity. Piplups like to play in it.",
  2: "Made from those leaves on top of Turtwig (don't worry they grow back).",
  3: "Made from those leaves on top of Turtwig (don't worry they grow back).",
  4: "Banana flavored milk - Chimchar's favorite treat cause he monke!",
  5: "Banana flavored milk - Chimchar's favorite treat cause he monke.",
  6: "I feel like Whopers would like this.",
  7: "Heard you like Mudkip.",
  8: "Heard you like Mudkip.",
  9: "Health drink packed with love from Seel to help you in sports.",
  10: "Health drink packed with love from Seel to help you in sports.",
  11: "Smogon Inc. recommends drink this for any competitive Latias companions.",
  12: "Smogon Inc. recommends drink this for any competitive Latias companions.",
  13: "Jumpluff but plush!",
  14: "Not for trainer consumption. Only feed to Duckletts.",
  15: "Not for trainer consumption. Only feed to Duckletts.",
  16: "You might have bad dreams after drinking this.",
  17: "You might have bad dreams after drinking this.",
  18: "This drink teleports you if you meet people.",
  19: "This drink teleports you if you meet people.",
  20: "You can't drink this plushie, but it's fluffy.",
};

export const drinkSrcs = {
  0: "./assets/piplup.png",
  1: "./assets/piplup.png",
  2: "./assets/turtwig.png",
  3: "./assets/turtwig.png",
  4: "./assets/chimchar.png",
  5: "./assets/chimchar.png",
  6: "./assets/wooper.png",
  7: "./assets/mudkip.png",
  8: "./assets/mudkip.png",
  9: "./assets/seel.png",
  10: "./assets/seel.png",
  11: "./assets/latias.png",
  12: "./assets/latias.png",
  13: "./assets/jumpluff.png",
  14: "./assets/ducklett.png",
  15: "./assets/ducklett.png",
  16: "./assets/gengar.png",
  17: "./assets/gengar.png",
  18: "./assets/abra.png",
  19: "./assets/abra.png",
  20: "./assets/venonat.png",
};
