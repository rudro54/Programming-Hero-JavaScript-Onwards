// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {}; // will store as object
    // both key and value , will be update as let

    //get the shopping cart from local  storage
    // before that the below local storage set item is coded
    const storedCart = localStorage.getItem('shopping-cart');
    //.getItem returns null if not there and '1' if there from before
    if (storedCart) { // truthy
        shoppingCart = JSON.parse(storedCart); // convert from string to object
        //convert string '1' to number
    }

    // add quantity
    const quantity = shoppingCart[id];
    // sending id in shopping cart will provide us value
    // which we did by get item before 
    if (quantity) {
        // if there 
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity; // important

    }
    else {
        // if not there 
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart)); // converted to string
    // after value update local storage will work সেট আইটেম তাই চায়
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
}