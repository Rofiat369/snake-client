// const {connect} = require("./client");
// const {setupInput} = require("./input");

// console.log("Connecting ...");
// let conn = connect();

// setupInput(conn);



const connect = require("./client")
const setupInput = require("./input")

console.log("Connecting ...");
connect();
setupInput();