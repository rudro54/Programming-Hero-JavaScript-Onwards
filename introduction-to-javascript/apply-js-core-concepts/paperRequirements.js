/* paperRequirements( 3 parameters how many pcs of book1 book2 book3 ) → 
book1-100pages , 
book2-200pages  
book3-300pages

total page
*/
function paperRequirements(bookOneQuantity, bookTwoQuantity, bookThreeQuantity) {

    let bookOnePages = bookOneQuantity * 100;
    let bookTwoPages = bookTwoQuantity * 200;
    let bookThreePages = bookThreeQuantity * 300;

    let totalPagesOfAllBooks = bookOnePages + bookTwoPages + bookThreePages;

    return totalPagesOfAllBooks;

}

let resultOfPages = paperRequirements(5, 10, 15);
console.log('total pages required for all books are :', resultOfPages + ' pages.');