const theOneFunc = (par) => {
    console.log(par);
};

setTimeout(theOneFunc, 4 * 1000, "Hello");

// Hello after 4 seconds


// Hello after 8 seconds
setTimeout(theOneFunc, 8 * 1000, "Hello");

// You can define only ONE function
