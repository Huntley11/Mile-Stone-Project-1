let count = 0;
let incrementAmount = 1;
let lemonadeCount = 0;
let lemonadeCost = 10;
let mowerCount = 0;
let mowerCost = 100;
let coffeeCount = 0;
let coffeeCost = 10000;
let fastFoodCount = 0;
let fastFoodCost = 100000;
let bankCount = 0;
let bankCost = 10000000;

function updateCounterText() {
  document.getElementById("dollarCounter").innerHTML = count.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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
  document.getElementById("lemonadeCount").innerHTML = lemonadeCount;
  document.getElementById("lemonadeButton").innerHTML = "Purchase A Lemonade Stand For " + lemonadeCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function lawnMowing() {
  if (count >= mowerCost) {
    count -= mowerCost;
    incrementAmount += 5.00;
    mowerCount++;
    mowerCost += mowerCount * 100;
  }
  updateCounterText();
  document.getElementById("mowerCount").innerHTML = mowerCount;
  document.getElementById("lawnMowingButton").innerHTML = "Hire A Person to Mow Lawns For " + mowerCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function coffeeShop() {
  if (count >= coffeeCost) {
    count -= coffeeCost;
    incrementAmount += 100.00;
    coffeeCount++;
    coffeeCost += coffeeCount * 1000;
  }
  updateCounterText();
  document.getElementById("coffeeCount").innerHTML = coffeeCount;
  document.getElementById("coffeeShopButton").innerHTML = "Purchase A Coffee Shop For " + coffeeCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function fastFood() {
  if (count >= fastFoodCost) {
    count -= fastFoodCost;
    incrementAmount += 1000.00;
    fastFoodCount++;
    fastFoodCost += fastFoodCount * 10000;
  }
  updateCounterText();
  document.getElementById("fastFoodCount").innerHTML = fastFoodCount;
  document.getElementById("fastFoodButton").innerHTML = "Purchase A Fast Food Restaurant For " + fastFoodCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function bank() {
  if (count >= bankCost) {
    count -= bankCost;
    incrementAmount += 100000.00;
    bankCount++;
    bankCost += bankCount * 1000000;
  }
  updateCounterText();
  document.getElementById("bankCount").innerHTML = bankCount;
  document.getElementById("bankButton").innerHTML = "Purchase A Bank For " + bankCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}




  /*To do: #1 Add a counter for how many of each upgrade user has.
           #2 Change cost of upgrades to original cost + or * number of upgrades, whichever feels better.
           #3 Test with friends 
  */