const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const givenData = person.result;
const personContainer = document.getElementById("person_container");
givenData.forEach((person) => {
  const div = document.createElement("div");
  div.classList = "w-1/2 p-3";
  div.innerHTML = `

  <div class="border rounded-lg shadow-lg space-y-2">
  <h3 class="border-b rounded-t bg-gray-200 font-semibold text-lg pl-3">
    Person Name: ${person.name.fullName[0]} ${person.name.fullName[1]}
    
  </h3>

  <div class="pl-3 space-y-2">
    <p>Age: ${person.age}</p>
    <p>Street: ${person.address.street} House No. ${person.address.house}</p>
  </div>

    `;
  personContainer.appendChild(div);
});
