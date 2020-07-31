const packageJson = require("./functions/package.json");

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  rootDir: "./functions",
  preset: "ts-jest",
  testEnvironment: "node",
  transformIgnorePatterns: ["./functions/node_modules"]
};