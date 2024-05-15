// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to 
//make one happen. Change an index in one of your programs to produce an index error. Make sure you 
//correct the error before closing the program.
//Store some vehicles name an arrray:
var vehiclesName = ["bike", "car", "aeroplane", "boat"];
//producing error ! by Accessing invalid index of array:
// console.log(vehiclesName[4]);       unddefined
//In JavaScript, arrays count starting from index 0. So, if we're selecting from index 0 to 3, 
//there are four indices in total Therefore, when we try to access the index after 3, it will result in 
//"undefined" when logged to the console.
// Now we removed error:
console.log(vehiclesName[2]);
