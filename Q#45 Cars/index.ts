//define afunction to creat car objetct with optional option
function creat_car(manufacturer , model, ... options){
    //initilizea car object with manufecturer and model
    let car= {
        manufacturer : manufacturer ,
        model : model
    };
// ADD ADDITIONAL OPTIONS TO THE CAR OBJECT
options.forEach(option => {
  let [key , value] = option.split(":");
  car[key.trim()] = value.trim();   
});
return car;
}
//call the function to creat a car object
let my_car= creat_car ("Toyota", "corrolla" , "color :black" , "sunroof : true" , "year:2022");
//print a veriable to store the car object
console.log (my_car) 