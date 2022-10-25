fetch('https://reqres.in/api/users')
    .then(res =>
        res.json()
        // if (res.ok) {
        //     console.log('Success');
        // } else {
        //     console.log('Failed');
        // }

    )
    .then(data => console.log(data))
    .catch(error => console.log(error))
