console.log(111111);
console.log(222222);
// setTimeout(() => {
//     console.log(333333);
// })
const url = `'https://jsonplaceholder.typicode.com/todos/1'`;
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
console.log(444444);
console.log(555555);
