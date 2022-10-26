// storage wont work without browser
// so we add index.html
// open html file in live server inspect and application tab
// session storage ends with specific browser tab end
// local storage keeps all
// localStorage.getItem
// localStorage.setItem
// localStorage.removeItem
// localStorage.clear

//localStorage.setItem('userId', 87952214); // first one is key
// second one is value
// you can use this dynamically by creating input field in the html

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value ');
    const value = valueInput.value;

    //
    if (id && value) { // error checking so that 
        //empty click wont be added
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

localStorage.setItem('friends', [75, 78, 98]);

// you can add also can update exiting by this way
// always stores as json or string so if you want to 
// add some array or object you need to add that
// json.stringify way

localStorage.setItem('classmates', JSON.stringify([11, 22, 33, 44]));

// same way for object adding 
const pen = {
    price: 10,
    color: 'black'
}

localStorage.setItem('pen', JSON.stringify(pen));

// now if you need to get object from localStorage 
const storePen = localStorage.getItem(pen);
// this will return a json string object but you
// wont be able to use this 
// you need to parse that to use
const penObj = JSON.parse(storePen);