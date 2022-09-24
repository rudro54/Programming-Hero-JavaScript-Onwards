// 1. where to add 
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// 3. add the child
placesList.appendChild(li); // no string 



// 1. where to add 
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer); // no string here, just to check if working properly

//2. what to be added

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'kabab';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'hummus';
ul.appendChild(li3);


section.appendChild(ul);
mainContainer.appendChild(section);


// set inner html directly  there will be no hints while writing html codes 

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `

  <h1>My Favorite Dress </h1>
  <ul>
     <li>T-shirt</li>
     <li>Jeans</li> 
     <li>Sunglass</li>  
  
  
  </ul>

`

mainContainer.appendChild(sectionDress);
