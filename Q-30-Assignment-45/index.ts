// Store Some names in Array

let userNames : string[] = ["Bismah" , "Tasmiyah" , "Muntaha" , "Hiba" , "Admin Umar Farooq"];

userNames.forEach(userone => {
    if (userone === "Admin Umar Farooq") {
        console.log(`Hello, ${userone}, would you like to see a status report?`)  
    
    }
    else{
        console.log(`Hello, ${userone}, thank you for logging in again."`);
        }
    
});