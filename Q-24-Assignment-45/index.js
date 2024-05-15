//Define some veriales
var fruite = "mango";
var upperCaseFruite = "MANGO";
var age1 = 5;
var age2 = 7;
var vehicles = ["Car", "Truck", "Bike"];
// Tests for equality and inequality with strings
console.log("fruite is equal to mango");
console.log(fruite == "mango");
console.log("\nfruite is not equal to mango");
console.log(fruite != "mango");
//Tests using the lower case function
console.log("\n Is MANGO is equal to mango after changing the lowerCase");
console.log(upperCaseFruite.toLowerCase() == "mango");
console.log("\n is MANGO is not equal to mango after changing the lowerCase");
console.log(upperCaseFruite.toLowerCase() != "mango");
//Test equality and inequality
console.log("\n age1 is equal to age2");
console.log(age1 == age2);
console.log("\n age1 is not equal to age2");
console.log(age1 != age2);
//Test in greater than and less than
console.log("\n age1 is greater than age2");
console.log(age1 > age2);
console.log("\n age1 is less than age2");
console.log(age1 < age2);
//Test in greater than or equal to
console.log("\n 7 greater than or equal to   ");
console.log(7 >= 5);
//Test in less than or equal to
console.log("\n 7 less than or equal to 5  ");
console.log(7 <= 5);
//Tests using && operator
console.log("\n age1 is not equal to age2 and age2 is greater than age1 ");
console.log(age1 != age2 && age2 > age1);
console.log("\n age1 is not equal to age2 and age2 is greater than age1 ");
console.log(age1 != age2 && age2 < age1);
//Test using or "||" operator
console.log("\n age1 is not  equal to age2 or age2 is greater than age1 ");
console.log(age1 != age2 || age2 > age1);
console.log("\n age1 is equal to age2 or age1 is greater than age2 ");
console.log(age1 == age2 || age1 > age2);
//Test whether an item is not in a array
console.log("\n Is Bike include in my vehicles");
console.log(vehicles.includes("Bike"));
console.log("\n Is Bike not include in my vehicles");
console.log(!vehicles.includes("Bike"));
