let count = 0;
let incrementAmount = 1;
let lemonadeStandCount = 0;
let lawnMowingCount = 0;
let coffeeShopCount = 0;
let fastFoodCount = 0;
let bankCount = 0;

function updateCounterText() {
  document.getElementById("dollarCounter").innerHTML = count.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  document.getElementById("lemonadeCount").textContent = lemonadeStandCount;
  document.getElementById("mowerCount").textContent = lawnMowingCount;
  document.getElementById("coffeeCount").textContent = coffeeShopCount;
  document.getElementById("fastFoodCount").textContent = fastFoodCount;
  document.getElementById("bankCount").textContent = bankCount;
}

function incrementCounter() {
  count += incrementAmount;
  updateCounterText();
}

function lemonadeStand() {
  if (count >= 10) {
    count -= 10;
    incrementAmount += 0.25;
    lemonadeStandCount++;
    document.getElementById("lemonadeCount").textContent = lemonadeStandCount;
  }
  updateCounterText();
}

  function lawnMowing() {
    if (count >= 100) {
      count -= 100;
      incrementAmount += 5.00;
      lawnMowingCount++;
      document.getElementById("mowerCount").textContent = lawnMowingCount;
    }
    updateCounterText();
  }

  function coffeeShop() {
    if (count >= 10000) {
      count -= 10000;
      incrementAmount += 100.00;
      coffeeShopCount++;
      document.getElementById("coffeeCount").textContent = coffeeShopCount;
    }
    updateCounterText();
  }

  function fastFood() {
    if (count >= 100000) {
      count -= 100000;
      incrementAmount += 1000.00;
      fastFoodCount++;
      document.getElementById("fastFoodCount").textContent = fastFoodCount;
    }
    updateCounterText();
  }

  function bank() {
    if (count >= 10000000) {
      count -= 10000000;
      incrementAmount += 100000.00;
      bankCount++;
      document.getElementById("bankCount").textContent = bankCount;
    }
    updateCounterText();
  }

  
  



  /*To do: #1 Add a counter for how many of each upgrade user has.
           #2 Change cost of upgrades to original cost + or * number of upgrades, whichever feels better.
           #3 Test with friends 
  */