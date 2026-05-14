const multiply = require("./app");

if (multiply(4, 5) === 20) {
  console.log("Pull request validation test passed");
} else {
  throw new Error("Pull request validation test failed");
}