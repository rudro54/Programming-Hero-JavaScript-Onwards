let p = new Promise((resolve, reject) => {

    let a = 1 + 2;

    if (a == 2) {
        resolve('Success'); // you can pass any message here;
    }
    else {
        reject('Failed'); // you can pass any message here;
    }
});

p.then((message) => { // always tries to get the success

    console.log('this is inside of then ,', message);

}).catch((message) => {

    console.log('this is inside catch', message);

})