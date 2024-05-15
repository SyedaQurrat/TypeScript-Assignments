//store  some Magicians name in array
var magiciansn_name = ["Criss Angel", "Derren Brown", "Lance Burton", "Ricky Jay"];
//creat function
function show_magicians(magiciansn) {
    magiciansn.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// copy of array with slice method
var copy_magiciansn_name = magiciansn_name.slice();
//modifie the copy array the include  "The Great" with their  names
var copy_great_magicians = make_great(copy_magiciansn_name);
//orignal array
console.log("\norignal Array");
show_magicians(magiciansn_name);
//copy array
console.log("\ncoppied Array");
show_magicians(copy_great_magicians);
