alert("Starting your Mars Adventure!");
alert("Booting up...");
alert("All systems go!");
alert("Let's start!");

// Prompt user for their name
let username = prompt("Hi there. What's your name?");
username = username[0].toUpperCase() + username.slice(1).toLowerCase();
alert(`Hello ${username}, prepare yourself for your adventure.`);

alert("Yesterday, you received a call from your good friend at NASA.");
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!");

// Prompt user about if they are excited for their adventure
let excited = prompt("Are you excited? (Type Y or N)");
let validInputReceived;
while (!validInputReceived) {
  if (excited.toUpperCase() === "Y") {
    alert("I knew you’d say that. It’s so cool that you’re going to Mars!");
    validInputReceived = true;
  } else if (excited.toUpperCase() === "N") {
    alert("Well, it’s too late to back out now.");
    validInputReceived = true;
  } else {
    excited = prompt(
      `"${excited}" is not Y or N. Please, try answering again. \nAre you excited? (Type Y or N)`
    );
  }
}

// Prompt user for number of suitcases to bring
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

// Prompt user to choose companion animal
alert("You're allowed to bring one companion animal with you.");
const companionType = prompt(
  "What kind of companion animal would you like to bring?"
);
let companionName = prompt("What is your companion's name?");
const firstLetter = companionName[0].toUpperCase();
const otherLetters = companionName.slice(1).toLowerCase();
companionName = firstLetter + otherLetters;
alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

// Prompt user to choose spaceship decor
alert("NASA has a interior design team offering to outfit your space ship.");
const decorOptions = `
  A  Sleek, modern minimalism
  B  Retro/vintage space age
  C  Victorian-era steampunk

  Please enter A, B, or C`;
let decorChoice = prompt(
  `You have a couple of options for the interior decor of your ship. Your options are:${decorOptions}`
);
let validDecorLetterReceived;
while (!validDecorLetterReceived) {
  const decorChoiceUpperCase = decorChoice.toUpperCase();
  if (
    decorChoiceUpperCase === "A" ||
    decorChoiceUpperCase === "B" ||
    decorChoiceUpperCase === "C"
  ) {
    validDecorLetterReceived = true;
  } else {
    decorChoice = prompt(
      `"${decorChoice}" is not a valid option. Your options are:${decorOptions}`
    );
  }
}

let decor;
const decorChoiceUpperCase = decorChoice.toUpperCase();
if (decorChoiceUpperCase === "A") {
  decor = "modern minimalist";
} else if (decorChoiceUpperCase === "B") {
  decor = "retro";
} else {
  decor = "steampunk";
}

// Impress the user
alert(
  `${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`
);

// Time for lift off
let timer = 5;
while (timer > 0) {
  alert(`${timer}...`);
  timer -= 1;
}
alert("*** LIFTOFF ***");
