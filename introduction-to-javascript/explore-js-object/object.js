// create object using object literals

const player = {};


player.name = 'zayed';
player.speciality = 'batsman';
player.bat = function () { // anynymous function as no name 
    console.log('swinging the bat');
};

console.log(player);
player.bat();