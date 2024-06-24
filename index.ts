function makeSandwich(...items: string[]): void {
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
}

// Calling the function three times with different numbers of arguments
makeSandwich('turkey', 'lettuce', 'tomato');
makeSandwich('ham', 'cheese');
makeSandwich('peanut butter', 'jelly', 'banana', 'honey');
