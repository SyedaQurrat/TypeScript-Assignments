//store some current users names in array

let current_users : string[]= ["Bismah" , "Tasmiyah" , "Muntaha" , "Hiba" , "Umar Farooq"];

//store some new users names in array

let new_users : string[]= ["Syed Nafees" , "Syeda Qurrat" , "Muntaha" , "Hiba" , "Umar Farooq"];

//with loop method check if the new users names are already in the current users array
new_users.forEach(new_user_1 => {
    //Making a logic for cheking usersname alredy exist or not exist and save our veriable

let ourCondition= current_users.some(current_1_user => current_1_user.toLowerCase() === new_user_1.toLocaleLowerCase())

//print message with uses of if else statement
if (ourCondition) {
     console.log(`Sorry ! ${new_user_1} is already exist.`);
}else {
    console.log(`This name ${new_user_1} is avilable.`);
    
}
    
})


