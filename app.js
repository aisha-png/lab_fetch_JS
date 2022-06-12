console.log("HI!");

// const getAllCountries= () => {
//     const request = fetch("https://restcountries.com/v2/all")
//     .then(response => response.json())
//     .then(data => console.log(data))
// }
// getAllCountries();

// const getCountryByName = country => {
//     const countryDiv = document.querySelector('#countryName');
//     country.forEach(c => {
//         const cElement = document.createElement('p');

//         cElement.innerText = `Country name: ${country.name}`;
//         countryDiv.append(cElement);
//     });
// }
// getCountryByName();

const countriesList = document.getElementById("countries")
let countries; // this will contain fetched data

fetch("https://restcountries.com/v2/all")// + countryName
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => initialise(data))
    .then(data => {
        console.log(data);
    })
    .catch((error) => console.error("FETCH ERROR: ", error));

    function initialise(countriesData) {
        countries = countriesData;
        let options = "";
        // for (let i=0; i<countries.length; i++){
        //     // options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
        //     // options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
        //     countries.forEach(country => options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`)
        // }
        // document.getElementById("countries").innerHTML = options;
        // document.querySelector("#countries").innerHTML = options;
        countriesList.innerHTML = options;
    }


  



