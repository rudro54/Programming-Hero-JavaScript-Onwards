const loadUserFetch = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error)) // error handling
}

const loadUserAsync = async () => {
    try {
        const url = 'https://randomuser.me/api/?gender=female';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const displayUser = user => {
    console.log(user);
}