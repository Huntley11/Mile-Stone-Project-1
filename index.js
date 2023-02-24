let count = 0;
let incrementAmount = 1;

function updateCounterText() {
  document.getElementById("dollarCounter").innerHTML = count.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function incrementCounter() {
  count += incrementAmount;
  updateCounterText();
}

function lemonadeStand() {
  if (count >= 10) {
    count -= 10;
    incrementAmount += 0.25;
  }
  updateCounterText();
}

  function lawnMowing() {
    if (count >= 100) {
      count -= 100;
      incrementAmount += 5.00;
    }
    updateCounterText();
  }

  function coffeeShop() {
    if (count >= 10000) {
      count -= 10000;
      incrementAmount += 100.00;
    }
    updateCounterText();
  }

  function fastFood() {
    if (count >= 100000) {
      count -= 100000;
      incrementAmount += 1000.00;
    }
    updateCounterText();
  }

  function bank() {
    if (count >= 10000000) {
      count -= 10000000;
      incrementAmount += 100000.00;
    }
    updateCounterText();
  }

  /*To do: #1 Add a counter for how many of each upgrade user has.
           #2 Change cost of upgrades to original cost + or * number of upgrades, whichever feels better.
           #3 Test with friends.