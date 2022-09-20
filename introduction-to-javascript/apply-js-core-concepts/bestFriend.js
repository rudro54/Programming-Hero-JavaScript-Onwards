function bestFriend(namesArray) {
    let length = 0;
    let longest;

    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i].length > length) {
            length = namesArray[i].length;
            longest = namesArray[i];
        }

    }
    return longest;
}

let friendsArray = ['sajid', 'mamun', 'kamal', 'Jubayer bin rashied', 'chinku', 'potla', 'abdullah al mamun bin daiyan'];
let result = bestFriend(friendsArray);
console.log('the longest name of all my friend is :', result);