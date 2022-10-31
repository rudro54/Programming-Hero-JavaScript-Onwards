// -resolve
//-reject
// -pending

function func1() {
    return new Promise(function (resolved, reject) {
        setTimeout(() => {

            const error = true; // error true means will catch eroor

            if (!error) {
                console.log('Function : your problem has been fixed');
                resolved();
            } else {
                console.log('Function :your problem has not been fixed');
                reject('sorry not fulfilled');

            }

        }, 2000);


    })


}

func1().then(function () {
    console.log('Zayed :Thanks for resolving');
}).catch(function (error) {
    console.log('Zayed : Very bad bro  ' + error);
})
