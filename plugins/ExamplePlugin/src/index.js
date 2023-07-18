// You can put anything you want in the body of your plugin code.
import confetti from "canvas-confetti";

console.log("Hello world!")
confetti()

// This is where you would typically put cleanup code.
export function onUnload() {
  console.log("Goodbye world!");
}
