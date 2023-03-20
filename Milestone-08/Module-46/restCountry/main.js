const loadAllCountry = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showAllCounty(data);
    });
};
loadAllCountry();
const showAllCounty = (country) => {
  const singleCountry = country.map((country) => showCase(country));
  let container = document.getElementById("root");
  container.innerHTML += singleCountry.join("");
  //   console.log(singleCountry);
};
const showCase = ({ name, flags, capital }) => {
  return `<div class="single-country">
        <h2>${name.common}</h2>
        <h3>Capital: ${capital}</h3>

        <img src="${flags.png}" alt="" />
    </div>`;
};

// const showAllCounty = (country) => {
//   const container = document.getElementById("root");
//   const showCase = ({ name, capital, flags, languages }) => {
//     // const { name, capital, flags } = country;

//     container.innerHTML += `
//       <div class="single-country">
//         <h2>${name.common}</h2>
//         <h3>Capital: ${capital}</h3>
//         <p>Language: ${languages["eng"]}</p>
//         <img src="${flags.png}" alt="" />
//       </div>
//       `;
//   };
//   country.slice(0, 9).map((country) => showCase(country));
// };
