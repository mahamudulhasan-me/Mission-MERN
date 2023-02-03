function requiredWood(chair, table, bed) {
  const chairWood = 3;
  const tableWood = 10;
  const bedWood = 50;
  const perChairWood = chair * chairWood;
  const perTableWood = table * tableWood;
  const perBedWood = bed * bedWood;
  const totalWood = perChairWood + perTableWood + perBedWood;
  return totalWood;
}
let chair = 1;
let table = 1;
let bed = 1;
const myRequired = requiredWood(chair, table, bed);
console.log(myRequired);
