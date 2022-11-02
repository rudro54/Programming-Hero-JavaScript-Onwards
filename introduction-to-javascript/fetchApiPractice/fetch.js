
// button with id myBtn
const myBtn = document.getElementById('myBtn');

// div with id content
const content = document.getElementById('content')

//Get Request
function getData() {
    console.log('started get data');
    const url = `https://api.github.com/users`;
    fetch(url)
        .then(res => {
            console.log('inside first then');
            return res.json(); // we need in objects
        })
        .then(data => {
            console.log('inside second then');
            console.log(data);
        })

}

// fetch of post takes url and parameters 
function postData() {
    // you have to stringify object
    // fake post request api search google 
    url = "http://dummy.restapiexample.com/api/v1/create";
    // this is string so no need to stringify
    data = {
        "name": "Zayed5645",
        "salary": 1000,
        "age": 28
    };


    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) //if data in string format 
        // no need to stringify

    }
    fetch(url, params).then(res => res.json()).then(data => console.log('data'))


}

// console.log('before running get data');
// getData();
// console.log('after running get data');
postData();