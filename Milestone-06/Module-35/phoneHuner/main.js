const loadPhone = async (searchText, dataLimit) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await response.json();
  displayPhones(data.data, dataLimit);
  console.log(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
  const phoneContainer = document.getElementById("phone_container");
  const notFound = document.getElementById("msg_notFound");
  const btnShowAll = document.getElementById("btn_showAll");
  let phone = phones.slice(0, dataLimit);
  if (phone.length === 0) {
    notFound.classList.remove("hidden");
    btnShowAll.classList.add("hidden");
  } else if (phone.length > 8) {
    btnShowAll.classList.remove("hidden");
    notFound.classList.add("hidden");
  } else {
    notFound.classList.add("hidden");
    btnShowAll.classList.add("hidden");
  }
  showSpinner(false);
  phone.forEach((phone) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-compact  bg-base-100 shadow-xl">
    <div class="badge badge-info gap-2 font-semibold">
    ${phone.brand}
    </div>
    <figure>
      <img
        src="${phone.image}"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <label class="btn btn-primary" for="my-modal" onclick="loadPhoneDetails('${phone.slug}')">See Details</label>
      </div>
    </div>
  </div>
        `;
    phoneContainer.appendChild(div);
  });
};

// get search value

document.getElementById("search").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    showSpinner(true);
    document.getElementById("phone_container").innerHTML = "";
    loadPhone(e.target.value, 9);
  }
});

const spinner = document.getElementById("spinner");
function showSpinner(isLoading) {
  if (isLoading) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
}
document.getElementById("btn_showAll").addEventListener("click", (e) => {
  const searchInput = document.getElementById("search");
  const searchValue = searchInput.value;
  loadPhone(searchValue ? searchValue : "iphone");
  e.target.style.display = "none";
  const btnShowLess = document.getElementById("btn_showLess");
  btnShowLess.classList.remove("hidden");
  btnShowLess.addEventListener("click", (e) => {
    loadPhone(searchValue, 9);
  });
});
loadPhone("iphone", 9);

// display show all details functionality

const loadPhoneDetails = async (slug) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phone/${slug}`
  );
  const data = await response.json();
  console.log(data.data);
  showDetails(data.data);
};

const showDetails = async (phone) => {
  const sensors = () => {
    const sen = phone.mainFeatures.sensors.map((sensor) => sensor);
    return sen;
  };
  const modalBox = document.querySelector(".modal-box");
  modalBox.innerHTML = `
  <h3 class="font-semibold text-2xl border-b">${phone.name}</h3>
  <p class="font-semibold text-lg">Brand:${phone.brand}</p>
  <p class="font-semibold text-lg">${
    phone.releaseDate ? phone.releaseDate : "Released: No Date Found"
  }</p>
  <div class="flex gap-2 items-center">
  <h3 class="font-semibold text-xl">Main Feature</h3>
  <div class="w-[60%] h-0.5 bg-gray-600"></div>
  </div>
  <div>
    <table class="border w-full">
    <thead class="bg-gray-400 font-semibold py-2">
        <tr class="border text-center">
            <td>Feature</td>
            <td>Specification</td>
        </tr>
    </thead>
    <tbody class="text-center">
        <tr class="border">
            <td class = "bg-gray-300">Chipset </td>
            <td>${phone.mainFeatures.chipSet}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">Display </td>
            <td>${phone.mainFeatures.displaySize}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">Memory </td>
            <td>${phone.mainFeatures.memory}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">Sensors </td>
            <td>${sensors()}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">Storage </td>
            <td>${phone.mainFeatures.storage}</td>
        </tr>
    </tbody>
    </table>
  </div>
  <div class="flex gap-2 items-center">
  <h3 class="font-semibold text-xl">Other</h3>
  <div class="w-[60%] h-0.5 bg-gray-600"></div>
  </div>
  <div>
    <table class="border w-full">
    <tbody class="text-center">
        <tr class="border">
            <td class = "bg-gray-300">Bluetooth </td>
            <td>${phone.others.Bluetooth}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">GPS </td>
            <td>${phone.others.GPS}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">NFC </td>
            <td>${phone.others.NFC}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">Radio </td>
            <td>${phone.others.Radio}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">USB </td>
            <td>${phone.others.USB}</td>
        </tr>
        <tr class="border">
            <td class = "bg-gray-300">WLAN </td>
            <td>${phone.others.WLAN}</td>
        </tr>
    </tbody>
    </table>
  </div>
  <div class="modal-action">
    <label for="my-modal" class="btn">Yay!</label>
  </div>
    `;
};
