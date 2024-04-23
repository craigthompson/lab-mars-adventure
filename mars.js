// alert("Starting your Mars Adventure!");
// alert("Booting up...");
// alert("All systems go!");
// alert("Let's start!");

// const username = prompt("Hi there. What's your name?");
// alert(`Hello ${username}, prepare yourself for your adventure.`);

// alert("Yesterday, you received a call from your good friend at NASA.");
// alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!");

// //Prompt user about if they are excited for their adventure
// let excited = prompt("Are you excited? (Type Y or N)");
// let validInputReceived;
// while (!validInputReceived) {
//   if (excited.toUpperCase() === "Y") {
//     alert("I knew you’d say that. It’s so cool that you’re going to Mars!");
//     validInputReceived = true;
//   } else if (excited.toUpperCase() === "N") {
//     alert("Well, it’s too late to back out now.");
//     validInputReceived = true;
//   } else {
//     excited = prompt(
//       `"${excited}" is not Y or N. Please, try answering again. Are you excited? (Type Y or N)`
//     );
//   }
// }

//Prompt user for number of suitcases to bring
alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt("How many suitcases do you plan to bring?");
let validSuitcaseNumberReceived;
while (!validSuitcaseNumberReceived) {
  if (Number(numSuitcases) > 2) {
    alert("That’s way too many. You’ll have to pack more lightly.");
    validSuitcaseNumberReceived = true;
  } else if (Number(numSuitcases) <= 2) {
    alert("Perfect. You’ll certainly fit in the spaceship!");
    validSuitcaseNumberReceived = true;
  } else {
    numSuitcases = prompt(
      `"${numSuitcases}" is not a valid number of suitcases. Please, try answering again. \nHow many suitcases do you plan to bring?`
    );
  }
}
