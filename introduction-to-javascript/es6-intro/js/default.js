// function add(first, second) {
//     // before es6 we use to protect our parameter checking by securing the second one if any one passes one
//     // if (second === undefined) {
//     //     second = 0;
//     // }

//     // shortcut 

//     second = second || 0

//     const total = first + second;
//     return total;
// }

// es -6 default parameter 

// function add(first, second = 0) {


//     const total = first + second;
//     return total;
// }





// const result = add(10);
// console.log(result);


function fullName(firstName, lasName = 'abdullah') {
    const name = firstName + ' ' + lasName;
    return name;
}

const nameOfPerson = fullName('zayed');
console.log(nameOfPerson);