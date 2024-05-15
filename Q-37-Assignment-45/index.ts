// Making a function

function make_shirt (size : string= "Large" , message : string = " I LOVE TypeScript."){
    console.log (`A ${size} size shirt and print message on shirt${message} `);
}
//calling function with by defult size and message
make_shirt()

//calling function now medium size and by defult message
make_shirt ("medium")

// calling function with differnt size and  message

make_shirt("small" , "I LOVE PYTHON")