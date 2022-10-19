
// x++ vs ++x
// i++ vs ++i
console.log('first');
console.log('second');
let seconds = 0;
const intervalId = setInterval(() => {
    console.log(++seconds);
    if (seconds === 10) {
        clearInterval(intervalId);
    }
}, 1500) // use control plus c to end the interval
console.log('forth');
console.log('fifth');

// same way TimeoutId  and clearTimeout(timeoutId) can be done 