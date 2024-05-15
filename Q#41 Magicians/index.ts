// define some Magicians name in array
let Magicians_name :string[] = ["Criss Angel","Derren Brown" , "Lance Burton" , "Ricky Jay"];

//now creating function
function Magicians(Magicians_name : string []) {
    Magicians_name.forEach(name => console.log(name));
} 

//calling function

Magicians(Magicians_name);
