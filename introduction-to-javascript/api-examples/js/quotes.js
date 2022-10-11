
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json()) // converting the response into json promise
        .then(data => displayQuotes(data))
} // arrow function is nothing but a variable so eror will 
//happen if you try to declare a variable before initialize 

const displayQuotes = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}