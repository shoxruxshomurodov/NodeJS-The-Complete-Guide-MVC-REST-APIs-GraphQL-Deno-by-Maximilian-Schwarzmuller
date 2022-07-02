// 📒📒📒 Introduction 📒📒📒

// 🔥🔥🔥 What is Node.js ? 🔥🔥🔥

// Node.js is a JavaScript Runtime - "JavaScript on the Server"
// Node.js use V8(Google) engine
// V8 compiles to "Machine Code"
// V8 written in C++

// 🔥🔥🔥 Install Node.js 🔥🔥🔥

// go to => nodejs.org
// LTS = Long Term Support
// node

console.log("Hello from Node.js");

const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node.js");

// 🔥🔥🔥 Understanding the Role & Usage of Node.js 🔥🔥🔥

// JavaScript on the Server

// => request Server
//Server => Database
//Server => Authentication
//Server => Input Validation
//Server => Your Business Logic

// <= response "HTML Page"

// Side note: You're not limited to the Server !🔥🔥🔥

// Node.js is a JavaScript Runtime
// You can use it for more than just Server-side Code
// Utility Scripts, Build Tools, ...

// Node.js Role (in Web Development)🔥🔥🔥

// Run Server => Create Server & Listen to Incoming Requests
// Business Logic => Handle Requests, Validate Input, Connect to Database
// Responses => Return Responses (Rendered HTML, JSON, ...)

// 🔥🔥🔥 Working with the REPL vs Using Files 🔥🔥🔥

// R > Read ===> Read  User Input
// E > Eval ===> Evaluate User Input
// P > Print ===> Print Output (Result)
// L > Loop ===> Wait for new Input
