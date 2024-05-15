//Define arry:
var alienColor1 = "green";
// VERSION 1.... if and elseif statement:
if (alienColor1 === "green") {
    console.log("If you kill a green alien, you will get five points...");
}
else if (alienColor1 === "yeellow") {
    console.log("If you kill a yellow alien, you will get ten points...");
}
else if (alienColor1 === "red") {
    console.log("If you kill a red alien, you will get fifteen points...");
}
// VERSION 2 ....if and  else if statement:
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log(" If you kill a green alien, you will get five points...");
}
else if (alienColor2 === "yellow") {
    console.log("\n If you kill a yellow alien, you will get ten points...");
}
else if (alienColor1 === "red") {
    console.log("If you kill a red alien, you will get fifteen points...");
}
// VERSION 3.... if and else statement:
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("If you kill a green alien, you will get five points...");
}
else if (alienColor3 === "yellow")
    console.log("If you kill a yellow alien, you will get ten points...");
else if (alienColor3 === "red") {
    console.log("\nIf you kill a red alien, you will get fifteen points...");
}
