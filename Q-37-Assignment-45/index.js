// Making a function
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = " I LOVE TypeScript."; }
    console.log("A ".concat(size, " size shirt and print message on shirt").concat(message, " "));
}
//calling function with by defult size and message
make_shirt();
//calling function now medium size and by defult message
make_shirt("medium");
// calling function with differnt size and  message
make_shirt("small", "I LOVE PYTHON");
