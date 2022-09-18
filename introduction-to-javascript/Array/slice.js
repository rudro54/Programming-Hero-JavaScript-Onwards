const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.slice(2, 5);
console.log(partial);

const moreFriends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partialSplice = moreFriends.splice(2, 5);
console.log(partialSplice);
console.log(moreFriends);