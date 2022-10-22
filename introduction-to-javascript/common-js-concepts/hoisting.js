
print5();
for (var i = 0; i < 5; i++) {
    // console.log(i);
}
//console.log('outside :', i); // i++ will break loop but 
// as declared by var this will show the updated value of i
// that is why let should be used 
//console.log(i);

function print5() {
    console.log('inside print5', 5);  // automatically hoisted
}