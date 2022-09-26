
// step 1 : add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {

    // step 2 : get the email address inside the email input field
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 3 : get passowrd
    // 3 a : set id on the html element 
    // 3 b : get the element
    // 3 c : get the value from the elemenet 

    const passwordField = document.getElementById('user-password');
    const passowrd = passwordField.value;

    // Danger : do not compare or verify email password on the client side, this will got to server side  
    // we will learn that later but for learning we are doin this right now. 

    // stp 4 : verify email and password and check valid user or not

    if (email === 'sontan@baap.com' && passowrd === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('either email or password given is wrong . you wont be able to enter')
    }

});


