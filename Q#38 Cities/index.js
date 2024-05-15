//making function
function discribe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//calling function different city with by defult country
discribe_city("Karachi");
discribe_city("Lahore");
discribe_city("Islamabad");
//calling function with different city and country
discribe_city("Riyadh", "Saudi Arabia");
