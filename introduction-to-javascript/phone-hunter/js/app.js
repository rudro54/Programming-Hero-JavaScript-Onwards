const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // this is a static one, we will do this dynamic later
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit); // then we can see array of object 

}

const displayPhones = (phones, dataLimit) => {
    //console.log(phones); // to check for first time then its deactivated
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = ``; // so that previous appended ones not visible
    // display only 10 phones 
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }


    // display no phone found
    const noPhone = document.getElementById('not-found-message');
    // no phone found means phones array length is 0
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    // display all phones
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
            <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>  
            </button>

        </div>
        </div>
        
        `;

        phonesContainer.appendChild(phoneDiv);

    });

    // stop spinner / loader
    toggleSpinner(false);
}


const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value; // to make the search dynamic 
    loadPhone(searchText, dataLimit);
}


// handle search button click
document.getElementById('btn-search').addEventListener('click', function () {
    // start loader
    processSearch(10);
    // now you need to check what is written in the input text field 
    // so add one id there 
    // input  field works with value
    // if you type a lots of things will be showing 
    // to eliminate this got to displayPhones function and use slice 

})

// search input field enter key handler remember this is input field enter not button

document.getElementById('input-field').addEventListener('keypress', function (e) {
    //console.log(e.key); show all what i write
    if (e.key === 'Enter') {
        processSearch();
    }

})


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

// not the best way to show all just for current api limitation we are doing this
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetail(data.data);
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;

}


loadPhone('apple'); // calling the function



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
// if you want to add one functionality that if you search stupidly there 
// will be a warning message then you need  to add a div and display none 
// that will be visible with some logic  
// if you write stupid and check in the network fetch dfd field you will see
//?search=undefined	Fetchphones?search=dfd	Fetchphones?search=dfd	

// data
// : 
// [] -> this is an empty array
// status
// : 
// false
// go to displayPhone function to put logic using the d-none class
// adding spinner or loader in the file go to bootstrap for that
// add a section for adding spinners
// if you do not put any logic spinner will always be there 
// this will be handled by when searching starts and ends
// by default d-none will suffice
// if you need to show something or unshow that is called toggle
// now about show all , what we are doing now is taking whole from api 
// then slice that and showing , but good way should be giving api 
// instruction to get 10 only 
// then while clicking show all the dyanmic api will deduct old instrution
// and show the rest but this is not possible upto now (first approach)
// second approach could be taking the whole bunch and storing in one global variable
//then when needed using them 
// we wont use this 
// we will use just for now a third approach just for our limitation
// third way is recall the whole bunch when clicking the show all button
// and removing the old 10 only 
// so the idea is when clicking on search the dataLimit is 10 so slice will work
// and when the show all button is clicked there is no data limit and as there 
// is no data limit it will not activate the slice 
// for showing phone details we need id but in this api there is slug not id
// so check the phone details url or api by putting slug over there
// add click handler in the button and as slug is a string so it must be 
// inside a '' in the dynamic string 
// button onclick="loadPhoneDetails( this parameter will be a dynamic one)"
//<button onclick="loadPhoneDetails('${phone.slug}')" href="#" class = "btn btn-primary">Show Details</button>  
// now check by clicking and inspecting the button if they recieve the slug value 
// google search javascript input field enter key event handler
// will use modal for show details
// in case of modal remember one thing button trigger and 

