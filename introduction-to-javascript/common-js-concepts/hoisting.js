
print5();
console.log(print10);
for (var i = 0; i < 5; i++) {
    // console.log(i);
}
//console.log('outside :', i); // i++ will break loop but 
// as declared by var this will show the updated value of i
// that is why let should be used 
//console.log(i);


function print5() {
    console.log('inside print5', 10);  // automatically hoisted
}
// but incase of expression hoisting wont be done and error 

const print10 = function () {
    console.log('inside print5', 5);  // will show error
    // as expression and can not be hoisted
} 