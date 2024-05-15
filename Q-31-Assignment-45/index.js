//store some Name in array
var userNames = ["Bismah", "Tasmiyah", "Muntaha", "Hiba", "Admin Umar Farooq"];
userNames = [];
if (userNames.length === 0) {
    console.log("yor array is empty, wee need to fined some user!");
}
else {
    userNames.forEach(function (userone) {
        if (userone === "Admin Umar Farooq") {
            console.log("Hello, ".concat(userone, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello, ".concat(userone, ", thank you for logging in again.\""));
        }
    });
}
