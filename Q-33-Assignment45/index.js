var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//use for loop method
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var digits = numbers_1[_i];
    var ordinal = void 0;
    if (digits === 1) {
        ordinal = "st";
    }
    else if (digits === 2) {
        ordinal = "nd";
    }
    else if (digits === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(digits, " ").concat(ordinal));
}
