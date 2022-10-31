
// button with id myBtn
const myBtn = document.getElementById('myBtn');

// div with id content
const content = document.getElementById('content')

function getData() {
    console.log('started get data');
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('inside second then');
            console.log(data);
        })

}

console.log('before running get data');
getData();
console.log('after running get data');