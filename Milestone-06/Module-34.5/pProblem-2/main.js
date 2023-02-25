const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
  },
];
const carContainer = document.getElementById("car_container");
data.slice(0, 2).forEach((car) => {
  console.log(car);
  const div = document.createElement("div");
  div.classList = "w-1/2 p-3";
  div.innerHTML = `
          <div>
            <img src="${car.imageURL}" alt="" />
            <p class="font-semibold text-xl">Care Name: ${car.name}</p>
            <p>
              <span class="font-semibold text xl">Car Details:</span> ${car.description}
            </p>
            <button class="bg-lime-400 px-8 py-3 font-bold">Car Price: ${car.price}</button>
          </div>
  `;
  carContainer.appendChild(div);
});
