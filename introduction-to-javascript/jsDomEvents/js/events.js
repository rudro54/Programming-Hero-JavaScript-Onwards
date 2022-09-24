console.log('this is a separate js file');


// option :1 directly set on the html element 

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

// option 3 : b

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


