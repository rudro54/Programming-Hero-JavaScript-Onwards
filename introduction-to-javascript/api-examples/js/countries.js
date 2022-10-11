const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        //console.log(country);
        countryDiv.innerHTML = `
            <h3>Name : ${country.name.common} </h3>
            <p> Capitl : ${country.capital ? country.capital[0] : 'no capital'} </p>
            <button onclick ="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);

    })
}

const loadCountryDetails = (code) => {
    //https://restcountries.com/v3.1/alpha/{code}
    const url = (`https://restcountries.com/v3.1/alpha/${code}`)// us tick
    //console.log('get country details', code);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
      <h2>Details :${country.name.common} </h2>
      <img src ="${country.flags.png}">

    
    `;
}

loadCountries();