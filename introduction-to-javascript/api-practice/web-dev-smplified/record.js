const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video One Recorded');

})

const recordVideoTwo = new Promise((resolve, reject) => {

    resolve('Video Two Recorded');


})

const recordVideoThree = new Promise((resolve, reject) => {

    resolve('Video Three Recorded');


})
// promise.all => array of promises will run together
// promise.race
Promise.all([])