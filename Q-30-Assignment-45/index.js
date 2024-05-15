// Store Some names in Array
var userNames = ["Bismah", "Tasmiyah", "Muntaha", "Hiba", "Admin Umar Farooq"];
userNames.forEach(function (userone) {
    if (userone === "Admin Umar Farooq") {
        console.log("Hello, ".concat(userone, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello, ".concat(userone, ", thank you for logging in again.\""));
    }
});
