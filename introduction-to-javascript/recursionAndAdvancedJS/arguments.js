function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]) // showing the result as well 33
}
add(12, 13, 32, 33, 22, 11);