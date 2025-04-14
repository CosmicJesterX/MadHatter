// Behold! The Maniacal Counter Gang!
// They can't agree on which number comes next, but they sure know how to scream about it.
console.log(`
   _____ _          _____           
  / ____| |        / ____|          
 | |    | |__   __| |     ___  _ __ 
 | |    | '_ \\ / _\` |    / _ \\| '__|
 | |____| | | | (_| |   | (_) | |   
  \\_____|_| |_|\\__,_|    \\___/|_|   
                                     
`);
let count = 0;

// Counting squad in action!
function maniacalCounter() {
    // Someone starts shouting the count
    console.log(`
      Count: ${count}!!!
      "It's ${count + 1}!" "No, it's ${count + 2}!" "WHO CARES?! LAUGH ANYWAY!"
    `);
    count++;
}

maniacalCounter();
maniacalCounter();
maniacalCounter();
