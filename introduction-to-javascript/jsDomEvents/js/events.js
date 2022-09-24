console.log('this is a separate js file');

// option 2 : add onclick function 

function makeRed() {
    document.body.style.backgroundColor = 'red';

}


// option 3 : a : 

const makePinkButton = document.getElementById('make-pink');
makePinkButton.onclick = makePink; // no functiuon call here just write the name

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


