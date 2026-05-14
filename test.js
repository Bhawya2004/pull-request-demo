const multiply = require("./app");

if (multiply(5, 5) === 25) {
  console.log("Pull request validation test passed");
} else {
  throw new Error("Pull request validation test failed");
}