/*
1. some middle console log will be showed after 3.5 seconds

console.log("first showing ");
setTimeout(() => {
    console.log("second showing");


}, 3500);

console.log("third showing");

2. take a number from user using prompt and add add 250 
with that number and then display the number using alert

const takeInput = () => {

    const value = prompt("Give us a number");
    const valueInNumber = parseInt(value);
    const result = valueInNumber + 25;
    alert(`your desired result is : ${result}`);
}

3. what is cookie ? write in english at least 5-7 lines 

A cookie is an amount of information that persists between 
a server-side and a client-side. A web browser stores this 
information at the time of browsing. A cookie contains the 
information as a string generally in the form of a name-value
pair separated by semi-colons.


4. write at leaset 3 differences between local storage 
vs session storage 

sessionStorage is similar to localStorage ; the difference is 
that while data in localStorage doesn't expire, data in 
sessionStorage is cleared when the page session ends. 
Whenever a document is loaded in a particular tab in the 
browser, a unique page session gets created and assigned 
to that particular tab.

5. difference between cookies, local storage and session storage

For most cases, we use the local Storage object if we want 
some data to be on the browser. If we want it on the server, 
then we use cookies, and the session storage is used when 
we want to destroy the data whenever that specific tab gets 
closed or the season is closed by the user

6. what is event loop in javascript 
   how synchronized and asynchronized code works in javascript 

   Asynchronous is a non-blocking architecture, so the 
   execution of one task isn't dependent on another. 
   Tasks can run simultaneously. Synchronous is a blocking 
   architecture, so the execution of each operation is 
   dependent on the completion of the one before
  
   7. what are the things that are asynchronous (4 things )
   telecommunication , programming , communicaiton , buffet 
   restaurant order system


*/

