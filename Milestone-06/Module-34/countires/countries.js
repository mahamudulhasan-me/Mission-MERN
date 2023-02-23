function loadCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      displayCountries(data);
    });
}

const displayCountries = (countries) => {
  const countryContainer = document.getElementById("all_country");
  const nameContainer = document.getElementById("name-container");

  countries.forEach((country) => {
    const img = document.createElement("img");
    const span = document.createElement("span");

    span.innerText = country.name.common;
    img.src = country.flags.png;

    countryContainer.appendChild(img);
    nameContainer.appendChild(span);
  });
};
loadCountries();
