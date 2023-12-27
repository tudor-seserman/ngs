// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let count=0

const hello = setInterval(()=>{console.log("Hello World");
    count++; 
    if(count===5){
        console.log("Done")
        clearInterval(hello)}}, 1000)

