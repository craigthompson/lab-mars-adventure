// alert("Starting your Mars Adventure!");
// alert("Booting up...");
// alert("All systems go!");
// alert("Let's start!");

// const username = prompt("Hi there. What's your name?");
// alert(`Hello ${username}, prepare yourself for your adventure.`);

// alert("Yesterday, you received a call from your good friend at NASA.");
// alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!");

let excited = prompt("Are you excited? (Type Y or N)").toLowerCase();

let validInputReceived = false;
while (validInputReceived === false) {
  if (excited === "y") {
    alert("I knew you’d say that. It’s so cool that you’re going to Mars!");
    validInputReceived = true;
  } else if (excited === "n") {
    alert("Well, it’s too late to back out now.");
    validInputReceived = true;
  } else {
    excited = prompt(
      `"${excited}" is not Y or N. Please, try answer again. Are you excited? (Type Y or N)`
    ).toLowerCase();
  }
}
