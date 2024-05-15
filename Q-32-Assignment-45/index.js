//store some current users names in array
var current_users = ["Bismah", "Tasmiyah", "Muntaha", "Hiba", "Umar Farooq"];
//store some new users names in array
var new_users = ["Syed Nafees", "Syeda Qurrat", "Muntaha", "Hiba", "Umar Farooq"];
//with loop method check if the new users names are already in the current users array
new_users.forEach(function (new_user_1) {
    //Making a logic for cheking usersname alredy exist or not exist and save our veriable
    var ourCondition = current_users.some(function (current_1_user) { return current_1_user.toLowerCase() === new_user_1.toLocaleLowerCase(); });
    //print message with uses of if else statement
    if (ourCondition) {
        console.log("Sorry ! ".concat(new_user_1, " is already exist."));
    }
    else {
        console.log("This name ".concat(new_user_1, " is avilable."));
    }
});
