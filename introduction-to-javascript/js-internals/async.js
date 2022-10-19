
function doSomething() {
    console.log('third');
}

console.log('first');
console.log('second');
//setTimeout(() => { console.log('third') }, 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('response recieved');
        return response.json()

    })
    .then(json => console.log(json))
console.log('forth');
console.log('fifth');