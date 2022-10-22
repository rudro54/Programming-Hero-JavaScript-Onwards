function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
} // go to website console to check this
const watch1 = stopWatch();
console.log(watch1());
//console.log(watch1());
//console.log(watch1());
//console.log(watch1());
// instance will be created and there are two scopes 
// one biiger function stopWatch and everytimes 
// this is creating an instance 