//define afunction to creat car objetct with optional option
function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initilizea car object with manufecturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // ADD ADDITIONAL OPTIONS TO THE CAR OBJECT
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to creat a car object
var my_car = creat_car("Toyota", "corrolla", "color :black", "sunroof : true", "year:2022");
//print a veriable to store the car object
console.log(my_car);
