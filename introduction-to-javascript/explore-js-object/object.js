// create object using object literals
// object have two things : properties and method

const player = {};


player.name = 'zayed';
player.speciality = 'batsman';
player.bat = function () { // anynymous function as no name 
    console.log('swinging the bat');
};

//console.log(player);
//player.bat();

const student = {
    name: 'panedey',
    job: 'khay andey',
    ball: function () {
        console.log('throw the ball');

    },
    salary: 10000


}

//console.log(student);
// using object  contructor 

const person = new Object();
console.log(person);

