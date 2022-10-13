const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // this is a static one, we will do this dynamic later
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data); // then we can see array of object 

}

// for checking go to the page inspect network tab you can see that fetched data are object
/*
 {  for seeing this we need to go data.data as object
    "status": true, -> object and array inside one key of object data
    "data": [ already selected displayPhones(data.data);
        {
            "brand": "Apple ",
            "phone_name": "iPhone 13 mini",
            "slug": "apple_iphone_13_mini-11104",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 13 Pro",
            "slug": "apple_iphone_13_pro-11102",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 13 Pro Max",
            "slug": "apple_iphone_13_pro_max-11089",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 13",
            "slug": "apple_iphone_13-11103",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 12 Pro Max",
            "slug": "apple_iphone_12_pro_max-10237",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 12 Pro",
            "slug": "apple_iphone_12_pro-10508",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 12",
            "slug": "apple_iphone_12-10509",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 12 mini",
            "slug": "apple_iphone_12_mini-10510",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone SE (2020)",
            "slug": "apple_iphone_se_(2020)-10170",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 11 Pro Max",
            "slug": "apple_iphone_11_pro_max-9846",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 11 Pro",
            "slug": "apple_iphone_11_pro-9847",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone 11",
            "slug": "apple_iphone_11-9848",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone XS Max",
            "slug": "apple_iphone_xs_max-9319",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone XR",
            "slug": "apple_iphone_xr-9320",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg"
        },
        {
            "brand": "Apple ",
            "phone_name": "iPhone XS",
            "slug": "apple_iphone_xs-9318",
            "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg"
        }
    ] array
}
*/
// for advanced checking go to network tab by clicking filter > fetch / XHR
// you can see its object and have two properties status and data
// we need the data 
const displayPhones = phones => {
    //console.log(phones); // to check for first time then its deactivated
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = ``; // so that previous appended ones not visible
    // now use for each to display each phones 
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        // you need to add the col class from that card
        // cause you just made the col div
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        
        <div class="card p-4"> 
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        
        `;

        phonesContainer.appendChild(phoneDiv);



    })
}


// now for showing the phone we are using bootstrap cards 
// we dont need all so we will delete all and keep one card to use in js
// and for showing that we need to create element where we will show
// that will be inside display function
// writing forEach could be tricky in the arrow function inside bracket of for each
// data we already have selected by data.data so now phone.image is the way to 
// select photo
// we can make this dynamic by adding search functionality as given in repository
// from bootstrap take the search input from form section
// btn-search id is created for search button
// we need to add event handler
// so far fetch data is not dynamic so to make it dynamic do the foloowing 
// const loadPhone = async (searchText) => {  change
//  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


document.getElementById('btn-search').addEventListener('click', function () {
    // now you need to check what is written in the input text field 
    // so add one id there 
    // input  field works with value

    const inputField = document.getElementById('input-field');
    const searchText = inputField.value; // to make the search dynamic 
    loadPhone(searchText);





})

loadPhone(); // calling the function
