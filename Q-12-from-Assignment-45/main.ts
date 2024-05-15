//Question 12 solution

// define an array of names
let names:string[]=["Bismah" , "Tasmiyah" , "Muntaha" , "Hiba" , "Umar Farooq"];

//we use Loop Methood
for (let i = 0; i <names.length; i++ ){
    console.log(`Assalam-u-Alaikum ${names [i]}! How are you?`);
} 


//we use the "forEach" method.

names.forEach(friends => {
console.log(`Assalam-u-Alaikum ${friends}!what are you doing?`);    
});


//we use the "for ofloop" method.
for (const friendsName of names) {
    console.log(`Assalam-u-Alaikum ${friendsName}!Have a nice day.`)
};

//With this development we can display the same message with a different name
