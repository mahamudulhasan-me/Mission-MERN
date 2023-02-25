async function loadAllCountry(capital) {
  const response = await fetch(
    `https://restcountries.com/v3.1/capital/${capital}`
  );
  const data = await response.json();
  console.log(data);

  showCountryByRegion(data);
}
const showCountryByRegion = (countries) => {
  countries.forEach((country) => {
    const countryContainer = document.getElementById("country_container");
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
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="md:grid md:grid-cols-2 bg-violet-400 p-5 ">
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
            
      `;
    countryContainer.appendChild(div);
  });
};
document.querySelector("select").addEventListener("keyup", (e) => {
  document.getElementById("country_container").innerHTML = "";
  loadAllCountry(e.target.value);
});
