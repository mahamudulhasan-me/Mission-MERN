function loadMillionaires() {
  fetch("http://127.0.0.1:5500/data/AllBillionaires.json")
    .then((response) => response.json())
    .then((data) => showAllMillionaires(data));
}
loadMillionaires();

const showAllMillionaires = (billionaires) => {
  let totalWorth = 0;
  billionaires.slice(0, 5).forEach((billionaire) => {
    console.log(billionaire);
    totalWorth += billionaire.finalWorth;
    document.getElementById("total_wealth").innerText = totalWorth;
    document.getElementById("m_container").innerHTML += `
    <div class="flex justify-between text-left text-lg space-y-3 border-b">
       <p class="flex gap-2 w-[30%] items-center pr-2">
          ${billionaire.personName} <img src="./img/vision.png" alt=""  />
      </p>
      <p class="w-[20%]">${billionaire.countryOfCitizenship}</p>
      <p class="w-[20%]">${billionaire.industries}</p>
      <p class="w-[10%]">${billionaire.rank}</p>
      <p class="w-[20%]">${billionaire.finalWorth}1</p>
    </div>
    `;
  });
};
