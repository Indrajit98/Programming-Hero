// console.log(indrajit)
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries =>{

    /* for(country of countries){
        console.log(country.name.common)
    }
    */
   const countriesContainer = document.getElementById('countries-container')
   countries.forEach(country => {
    // console.log(country)
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');

    countryDiv.innerHTML = `
    
    <h3>Name: ${country.name.common}</h3>
    <P>Capita: ${country.capital ? country.capital[0] : 'No Capital'}</P>
    <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `
    countriesContainer.appendChild(countryDiv)

   })
}
loadCountryDetails =(code) =>{ 
    // console.log(code)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountriesDetails(data[0]) )

}
const displayCountriesDetails = country => {
    console.log(country)
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
    <h1>Details: ${country.name.common}</h1>
    <img src = ${country.flags.png}>

    `

}