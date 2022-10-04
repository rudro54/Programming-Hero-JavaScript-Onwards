const today = new Date();
console.log(today);

const date1 = new Date('1971-3-26');
const date2 = new Date('1971-12-16');


if (date1.getTime() < date2.getTime()) {  // the  logic is getTime()starts from january 1970 so this calcultion 
    // comes such logic that the less time in miliseconds are the oldest dates 
    console.log('march comes before december');
}
else {
    console.log('december comes after march');
}