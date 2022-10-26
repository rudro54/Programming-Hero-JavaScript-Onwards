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
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

// you can add also can update exiting by this way
