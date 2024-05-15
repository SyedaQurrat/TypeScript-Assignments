// define some Magicians name in array
var Magicians_name = ["Criss Angel", "Derren Brown", "Lance Burton", "Ricky Jay"];
//now creating function
function Magicians(Magicians_name) {
    Magicians_name.forEach(function (name) { return console.log(name); });
}
//calling function
Magicians(Magicians_name);
