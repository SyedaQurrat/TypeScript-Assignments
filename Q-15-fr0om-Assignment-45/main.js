// define guest name in array:
var guestList = ["Bismah", "Tasmiyah", "Muntaha", "Umar Farooq"];
// unable person from guest lit:
var unableAttendent = guestList.splice(3, 1)[0];
//for Print the Result:
console.log("".concat(unableAttendent, " can't cook food ."));
//add name in guest list (push):
guestList.push("Hiba");
// now print the invitation message:
guestList.forEach(function (guest) {
    console.log("Dear, ".concat(guest, " you are cordially invited to dinner."));
});
