//store  some Magicians name in array
let magiciansn_name : string[] =["Criss Angel" , "Derren Brown" , "Lance Burton" , "Ricky Jay"];

//creat function
function show_magicians (magiciansn:string[]){
magiciansn.forEach(name => console.log(name));
}

function make_great(magicians :string[]){
    magicians.map(name => console.log(`The Great ${name}`));
}

show_magicians(magiciansn_name);

make_great(magiciansn_name);

