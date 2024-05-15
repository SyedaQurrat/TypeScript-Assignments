"use strict";
// Store the person's name with whitespace characters
const personNameWithWhitespace = "\t\n   Syeda Qurrat   \t\n";
// Print the name with whitespace
console.log("Name with whitespace: '" + personNameWithWhitespace + "'");
// Strip the whitespace and print the name
const strippedName = personNameWithWhitespace.trim();
console.log("Stripped name: '" + strippedName + "'");
