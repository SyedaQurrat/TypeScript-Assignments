// define guest name in array:
let guestList : string []=["Bismah" , "Tasmiyah" , "Muntaha"  , "Umar Farooq"];

// unable person from guest lit:
let unableAttendent :string = guestList.splice(3,1)[0];

//for Print the Result:
console.log(`${unableAttendent} can't cook food .`);

//add name in guest list (push):
guestList.push("Hiba");

// now print the invitation message:
guestList.forEach(guest => {
 console.log(`Dear, ${guest} you are cordially invited to dinner.`)   
});

