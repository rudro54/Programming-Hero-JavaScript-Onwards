function loadUsers2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers2(data))
}
// this was inside displayerUsers2 before 
//console.log(user); 
//console.log(user.name);
//console.log(user.email);
//console.log(user.username);


function displayUsers2(data) {

    const ul = document.getElementById('users-list');

    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}