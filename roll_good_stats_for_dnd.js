// https://chat.openai.com/share/ed99d343-6c59-484b-a0e2-aef605024785

function rollDice() {
  // Roll 4 six-sided dice
  const diceRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);

  // Sum the three highest rolls (dropping the lowest)
  const sum = diceRolls.sort((a, b) => a - b).slice(1).reduce((acc, val) => acc + val, 0);

  return sum;
}

let numberOf18s = 0;
let rollsCount = 0;

while (numberOf18s < 3) {
  rollsCount = 0;
  let currentRolls = [];

  while (rollsCount < 6) {
    const result = rollDice();
    rollsCount++;

    // Check if the lowest roll is 17 or higher
    const minRoll = Math.min(...Array.from({ length: 4 }, (_, i) => result));
    if (minRoll >= 17) {
      currentRolls.push(`Roll ${rollsCount}: ${result}`);
      
      if (result === 18) {
        numberOf18s++;
      }
    } else {
      // If the condition is not met, restart the loop
      rollsCount = 0;
      currentRolls = [];
      numberOf18s = 0;
      continue;
    }
  }

  // Check if the set of rolls has at least 3 instances of 18
  if (numberOf18s === 3) {
    currentRolls.forEach(roll => console.log(roll));
    console.log("----");
  }
}

console.log("Successfully rolled 3 instances of 18 within 6 rolls.");
