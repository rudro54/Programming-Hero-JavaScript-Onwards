// object inside one array 

const users = [

    { id: 1, name: 'abul', job: 'doctor' }

];

//console.log(users.name); // this is an array but i am wrongly treat this as object
// result undefined

// so what should we do 

//console.log(users[0].name);

// array inside one object 

const data = {

    count: 5000,
    data: [

        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'Kabul', job: 'doctor' },



    ]


}

const secondJob = data.data[1].job;

console.log(secondJob); // so obj.array[index which is an object].key

const user = {
    id: 5001,
    name: 'thomas alva edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },

        postoffice: 'cantonment',
        city: 'dhaka'
    },

}

const userFloor = user.address.street.second;
console.log(userFloor);