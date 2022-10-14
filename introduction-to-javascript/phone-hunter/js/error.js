// synchoronous vs asynchronous
console.log(1);
setTimeout(() => {
    console.log(2)
}, 3000) // handler function 
console.log(3);
console.log(30);
console.log(30);
console.log(30); 