console.log('this is a separate js file');


// option :1 directly set on the html element 
// <!-- option 1 -->
// <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// option 2 : add onclick function 
// <!-- option 2 -->
// <button onclick="makeRed()">Make Red</button>

function makeRed() {
    document.body.style.backgroundColor = 'red';

}


// option 3 : a : 
// <!-- option 3 a -->
// <button id="make-pink">Make Pink</button>

const makePinkButton = document.getElementById('make-pink');
makePinkButton.onclick = makePink; // no functiuon call here just write the name

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 3 : b
// <!-- option 3 b -->
// <button id="make-purple">Make Purple</button>

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option : 4 a adding event listener 
// /* <button id="make-tomato">Make Tomato</button> */ 


const makeTomatoButton = document.getElementById('make-tomato');
makeTomatoButton.addEventListener('click', makeTomato);

function makeTomato() {
    document.body.style.backgroundColor = 'tomato';
}

// option 4 b 
//  <!-- option 4 b  -->
//  <button id="make-green">Make Green</button>

const makeGreentButton = document.getElementById('make-green');
makeGreentButton.addEventListener('click', function makeGreen() {

    document.body.style.backgroundColor = 'Green';
});


