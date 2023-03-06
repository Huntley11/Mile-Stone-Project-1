let count = Number(localStorage.getItem("dollarCount")) || 0;
let incrementAmount = Number(localStorage.getItem("incrementAmount")) || 1;
let lemonadeCount = Number(localStorage.getItem("lemonadeCount")) || 0;
let lemonadeCost = 10;
let mowerCount = Number(localStorage.getItem("mowerCount")) || 0;
let mowerCost = 100;
let coffeeCount = Number(localStorage.getItem("coffeeCount")) || 0;
let coffeeCost = 10000;
let fastFoodCount = Number(localStorage.getItem("fastFoodCount")) || 0;
let fastFoodCost = 100000;
let bankCount = Number(localStorage.getItem("bankCount")) || 0;
let bankCost = 10000000;

function updateCounterText() {
  document.getElementById("dollarCounter").innerHTML = count.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  localStorage.setItem("dollarCount", count);
  localStorage.setItem("incrementAmount", incrementAmount);
}

function updateLemonadeCount() {
  document.getElementById("lemonadeCount").innerHTML = lemonadeCount;
  document.getElementById("lemonadeButton").innerHTML = "Purchase A Lemonade Stand For " + lemonadeCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  localStorage.setItem("lemonadeCount", lemonadeCount);
  localStorage.setItem("lemonadeCost", lemonadeCost);
}

function updateMowerCount() {
  document.getElementById("mowerCount").innerHTML = mowerCount;
  document.getElementById("lawnMowingButton").innerHTML = "Hire A Person to Mow Lawns For " + mowerCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  localStorage.setItem("mowerCount", mowerCount);
}

function updateCoffeeCount() {
  document.getElementById("coffeeCount").innerHTML = coffeeCount;
  document.getElementById("coffeeShopButton").innerHTML = "Purchase A Coffee Shop For " + coffeeCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  localStorage.setItem("coffeeCount", coffeeCount);
}

function updateFastFoodCount() {
  document.getElementById("fastFoodCount").innerHTML = fastFoodCount;
  document.getElementById("fastFoodButton").innerHTML = "Purchase A Fast Food Restaurant For " + fastFoodCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  localStorage.setItem("fastFoodCount", fastFoodCount);
}

function updateBankCount() {
  document.getElementById("bankCount").innerHTML = bankCount;
  document.getElementById("bankButton").innerHTML = "Purchase A Bank For " + bankCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  localStorage.setItem("bankCount", bankCount);
}

function incrementCounter() {
  count += incrementAmount;
  updateCounterText();
}

function lemonadeStand() {
  if (count >= lemonadeCost) {
    count -= lemonadeCost;
    incrementAmount += 0.25;
    lemonadeCount++;
    lemonadeCost += lemonadeCount * 10;
  }
  updateCounterText();
  updateLemonadeCount();
}

function lawnMowing() {
  if (count >= mowerCost) {
    count -= mowerCost;
    incrementAmount += 5.00;
    mowerCount++;
    mowerCost += mowerCount * 100;
  }
  updateCounterText();
  updateMowerCount();
}

function coffeeShop() {
  if (count >= coffeeCost) {
    count -= coffeeCost;
    incrementAmount += 100.00;
    coffeeCount++;
    coffeeCost += coffeeCount * 10000;
  }
  updateCounterText();
  updateCoffeeCount();
}

function fastFood() {
  if (count >= fastFoodCost) {
    count -= fastFoodCost;
    incrementAmount += 1000.00;
    fastFoodCount++;
    fastFoodCost += fastFoodCount * 100000;
  }
  updateCounterText();
  updateFastFoodCount();
}

function bank() {
  if (count >= bankCost) {
    count -= bankCost;
    incrementAmount += 100000.00;
    bankCount++;
    bankCost += bankCount * 10000000;
  }
  updateCounterText();
  updateBankCount();
}

updateCounterText();
updateLemonadeCount();
updateMowerCount();
updateCoffeeCount();
updateFastFoodCount();
updateBankCount();



  /*To do: #1 Add a counter for how many of each upgrade user has.
           #2 Change cost of upgrades to original cost + or * number of upgrades, whichever feels better.
           #3 Test with friends 
           #4 add local storage to keep progress for user
  */