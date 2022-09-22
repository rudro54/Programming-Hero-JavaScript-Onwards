// for of loop

// old way

// const numbers = [45, 11, 22, 33, 66, 88, 99];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// latest for of loop way 

// for (const number of numbers) {
//     console.log(number);
// }

const products = [

    { id: 1, name: 'xiaomi phone one night', price: 19000 },
    { id: 2, name: 'iphone', price: 19000 },
    { id: 3, name: 'macbook pro', price: 119000 },
    { id: 4, name: 'lenevo yoga laptop 2025', price: 19000 },
    { id: 5, name: 'dell inspiron laptop', price: 19000 },
    { id: 6, name: 'samsung phone note 7', price: 19000 },
    { id: 7, name: 'nokia old phone gone', price: 19000 },
    { id: 8, name: 'Phone one', price: 19000 }

]

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) { // all converted to lower case for better search
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);

