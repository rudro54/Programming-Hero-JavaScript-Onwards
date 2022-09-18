// array of objects ....

const phones = [
    { name: 'samesung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },

    { name: 'walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },

    { name: 'iPhone', camera: 12, storage: '32gb', price: 82000, color: 'red' },

    { name: 'xiaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },

    { name: 'oppo', camera: 10, storage: '32gb', price: 20000, color: 'white' },

    { name: 'nokia', camera: 10, storage: '32gb', price: 44000, color: 'silver' },

    { name: 'htc', camera: 10, storage: '32gb', price: 62000, color: 'silver' },

    { name: 'sony', camera: 10, storage: '32gb', price: 50000, color: 'black' },

];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
