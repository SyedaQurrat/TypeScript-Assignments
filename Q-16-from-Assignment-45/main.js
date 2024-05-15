//put the different name in array :
var guestName = ["Bismah", "Tasmiyah", "Hiba"];
console.log("\"Hey! we just found a bigger dinner table and would love for you to join us for dinner!\"");
//add new guest to the begning:
guestName.unshift("Nafees");
// add new name to between:
guestName.splice(Math.floor(guestName.length / 2), 0, "Muntaha");
//add new guest to yhe last:
guestName.push("Umar Farooq");
//print the messaga for each person:
guestName.forEach(function (guest) {
    console.log("Dear! ".concat(guest, " yor all are cordialy invited to dinner."));
});
