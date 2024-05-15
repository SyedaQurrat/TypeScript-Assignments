//store  some Magicians name in array
let magiciansn_name : string[] =["Criss Angel" , "Derren Brown" , "Lance Burton" , "Ricky Jay"];

//creat function
function show_magicians (magiciansn:string[]){
magiciansn.forEach(name => console.log(name));
}

function make_great(magicians :string[]) {
   return magicians.map(name => `The Great ${name}`);
}

// copy of array with slice method
let copy_magiciansn_name =magiciansn_name.slice()

//modifie the copy array the include  "The Great" with their  names

let copy_great_magicians = make_great(copy_magiciansn_name);

//orignal array
console.log("\norignal Array")
show_magicians(magiciansn_name);

//copy array
console.log("\ncoppied Array")
show_magicians(copy_great_magicians);
