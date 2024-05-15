//store some Name in array
let userNames: string[] =["Bismah" , "Tasmiyah" , "Muntaha", "Hiba" , "Admin Umar Farooq"];

userNames = []
if (userNames.length === 0) {
    console.log("yor array is empty, wee need to fined some user!");
    
}
else {
    userNames.forEach(userone => {
        if (userone === "Admin Umar Farooq") {
            console.log(`Hello, ${userone}, would you like to see a status report?`)  
        
        }
        else{
            console.log(`Hello, ${userone}, thank you for logging in again."`);
            }
        
    });
     
}