// saved some names an array:
var guestList = [
    "Bismah",
    "Tasmiyah",
    "Muntaha",
    "Hiba",
    "Umarr Farooq",
];
//now use forEach method:
guestList.forEach(function (guest) {
    console.log("\"Dear ".concat(guest, ",\" I would be honored to have you join me for dinner, your presence would make the evening truly special.\n"));
});
//now use for map method:
var invitetion = guestList.map(function (guest) { return "Dear ".concat(guest, ",I would be honored to have you join me for dinner, your presence would make the evening truly special.\n"); });
console.log(invitetion);
