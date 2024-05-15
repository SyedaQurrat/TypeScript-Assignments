let numbers : number[] =[ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]
//use for loop method
for  (let digits of numbers) {
    let ordinal :string;
    if (digits===1) {ordinal="st"

    }else if (digits=== 2) { 
        ordinal ="nd"
    } else if (digits===3) {
        ordinal ="rd"
    } else{
        ordinal="th"
        
    }
        console.log(`${digits} ${ordinal}`);
        
    
    
    
}