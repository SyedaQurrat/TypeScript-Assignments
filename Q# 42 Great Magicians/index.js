//store  some Magicians name in array
var magiciansn_name = ["Criss Angel", "Derren Brown", "Lance Burton", "Ricky Jay"];
//creat function
function show_magicians(magiciansn) {
    magiciansn.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    magicians.map(function (name) { return console.log("The Great ".concat(name)); });
}
show_magicians(magiciansn_name);
make_great(magiciansn_name);
