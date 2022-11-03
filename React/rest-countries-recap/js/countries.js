const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}

const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
}

const getCountryHTML = ({ name, flags }) => {
    // option 3
    return `
       <div class = "country">
        <h2>${name.common}</h2>
        <img src ="${flags.png}">
       </div>

    `
}




// const getCountryHTML = country => {
// option 1

//     return `
//        <div class = "country">
//         <h2>${country.name.common}</h2>
//         <img src ="${country.flags.png}">
//        </div>

//     `
// }

// const getCountryHTML = country => {
//     // option two
//     const { name, flags } = country;

//     return `
//        <div class = "country">

//         <h2>${name.common}</h2>
//         <img src ="${flags.png}">
//        </div>
//     `
// }

loadCountries();