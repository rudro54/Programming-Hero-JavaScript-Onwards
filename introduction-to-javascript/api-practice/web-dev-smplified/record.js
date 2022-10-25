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
// promise.race => array of promises but will run resolve after the 
// first promise is done so video one recorded will show
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})