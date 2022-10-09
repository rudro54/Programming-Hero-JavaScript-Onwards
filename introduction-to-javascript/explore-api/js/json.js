const user = { id: 1, name: 'Gorib-Aamir', job: 'actor' };
//JavaScript Object Notation (JSON)

const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);

/*

{ id: 1, name: 'Gorib-Aamir', job: 'actor' }
{"id":1,"name":"Gorib-Aamir","job":"actor"}

*/

const shop = {
    owner: 'alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'dhaka',
        country: 'bd'

    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false

}

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// type of shop is object
// type of shopJSON is string
// you can convert string to object by using parse

