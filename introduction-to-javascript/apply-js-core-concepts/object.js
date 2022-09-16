const car = {

    name: 'fiat',
    model: 500,
    weight: '850kg',
    color: 'white',
    start: function () {
        this.drive();
        console.log('car has started');
    },
    drive: function () {
        console.log('car is driving');
    },

};

console.log(car.weight);
console.log(car['model']);
car.start();