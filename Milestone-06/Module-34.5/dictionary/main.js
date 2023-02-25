async function loadDictionary(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${
      word ? word : "keyboard"
    }`
  );
  const data = await response.json();
  console.log(data[0]);

  displayWordDisc(data[0]);
}
const displayWordDisc = (word) => {
  document.getElementById("container").innerHTML = `
    <div class="flex justify-between items-center px-4 pb-2">
        <div>
          <h1 class="font-bold text-4xl">${
            word.word ? word.word : alert("not a valid word")
          }</h1>
          <p class="text-lg text-violet-500">${word.phonetic}</p>
        </div>
        <button class="bg-gray-500 p-2 rounded-full">
        <audio controls>
        <source src="${
          word.phonetics ? word.phonetics[1].audio : word.phonetics[2].audio
        }" type="audio/ogg">
        </audio>
          
        </button>
      </div>
      <div class="mt-5">
        <div class="flex items-center gap-1">
          <p class="text-xl">${word.meanings[0].partOfSpeech}</p>
          <div class="w-full h-0.5 bg-violet-400"></div>
        </div>
        <div>
          <p class="text-xl">Meaning</p>
          <ul class="list-disc ml-10">
            <li>${word.meanings[0].definitions[0].definition}</li>
            <li>${word.meanings[0].definitions[1].definition}</li>
            <li>${word.meanings[0].definitions[2].definition}</li>
          </ul>
          <p class="text-xl">
            Synonyms: <span class="text-violet-500">${
              word.meanings[0].synonyms[0]
                ? word.meanings[0].synonyms[0]
                : "Not Found"
            }</span>
          </p>
        </div>
      </div>
      
      <p>
        Source: <a class="underline text-violet-500" href="${
          word.sourceUrls[0]
        }"
          >${word.sourceUrls[0]}</a
        >
      </p>
    `;
};
loadDictionary();
document.getElementById("search").addEventListener("click", (e) => {
  const searchValue = document.getElementById("search_value").value;
  loadDictionary(searchValue);
});
