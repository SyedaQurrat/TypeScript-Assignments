"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//some name store in an array:
let guestList = ["Bismah", "Tasmiyah", "Muntaha"];
console.log("Sorry, the dinner table can only accommodate two guests.");
// now add two new guest :
guestList.unshift("Hiba", "Umar Farooq");
//print massage for updated guestList:
console.log("updated guest List", guestList);
// Removing guests until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined)
        console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});
// Removing all guest from the list:
guestList.splice(0, guestList.length);
//print updated list:
console.log("Final guest list:", guestList);
