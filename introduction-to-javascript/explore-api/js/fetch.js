// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json()) // .JSON is not similar but close to JSON.parse
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response)) // .JSON is not similar but close to JSON.parse
//     //.then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//     .then(response => response.json()) // converting this to a JSOn promise
//     .then(json => console.log(json))

function loadData() {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json()) // converting this to a JSOn promise
        .then(json => console.log(json))

}