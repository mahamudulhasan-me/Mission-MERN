function loadAllCountryDetails() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayFlagsAndName(data));
}
const displayFlagsAndName = (data) => {
  const countryContainer = document.getElementById("country_container");
  data.forEach((country) => {
    const section = document.createElement("section");
    section.innerHTML = `
      <div
          class="flex flex-col justify-center items-center ring ring-violet-500 rounded-lg p-3 mb-3 space-y-3"
        >
          <img src="${country.flags.svg}" alt="" class="h-44 w-full border border-violet-500 p-2" />
          <p class="font-semibold text-2xl">${country.name.common}</p>
          <p class="text-xl font-semibold">${country.capital[0]}</p>
          <label for="my-modal-5" class="btn" onclick="loadCountriesDetails('${country.cca2}')">See Details</label>
        </div>
      `;
    countryContainer.appendChild(section);
  });
};

const loadCountriesDetails = (cca2) => {
  const uniqueUrl = `https://restcountries.com/v3.1/name/${cca2}`;
  fetch(uniqueUrl)
    .then((response) => response.json())
    .then((data) => displayCountriesDetails(data[0]));
};

const displayCountriesDetails = (country) => {
  const courrencies = () => {
    for (const currency in country.currencies) {
      return `${country.currencies[currency].name} [${country.currencies[currency].symbol}] `;
    }
  };
  const language = () => {
    for (const language in country.languages) {
      return `${country.languages[language]}`;
    }
  };
  document.querySelector(".modal-box").innerHTML = `
    <div class="md:grid md:grid-cols-2 ">
            <div class="border-r border-gray-500">
              <img src="${
                country.flags.png
              }"class=" border border-violet-500 p-2 mb-3"/>

              <div class="text-xl space-y-3 pr-2">
                <h2>Country Name:  <span class="text-2xl text-gray-200">${
                  country.name.common
                } [${country.cca3}]</span></h2>
                <h2>Capital: <span class="text-2xl text-gray-200">${
                  country.capital
                }</span></h2>

                <h3>Official Name: <span class="text-2xl text-gray-200">${
                  country.name.official
                }</span></h3>
                <h3>Continent:  <span class="text-2xl text-gray-200">${
                  country.continents
                }</span></h3>
              </div>
            </div>
            <div class="pl-2 ">
              <img src="${
                country.coatOfArms.png
              }" class="w-52  h-52 rounded-full ring ring-violet-500 px-2 mx-auto mb-4" alt="" />
              <div class="divide-y space-y-2">
                <p>Language: <span class="text-xl text-gray-200">${language()}</span></p>
                <p>Region: <span class="text-xl text-gray-200">${
                  country.region
                }</span></p>
                <p>Population: <span class="text-xl text-gray-200">${
                  country.population
                }</span></p>
                <p>Currency:<span class="text-2xl text-gray-200"> ${courrencies()}</span></p>
                <p>Time Zone: <span class="text-xl text-gray-200">${
                  country.timezones
                }</span></p>
                <p>Area: <span class="text-xl text-gray-200">${
                  country.area
                }</span></p>
              </div>
            </div>
          </div>
          <div class="modal-action">
               <label for="my-modal-5" class="btn">Yay!</label>
    </div>
    `;
};
loadAllCountryDetails();
