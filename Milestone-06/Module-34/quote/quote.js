function getQuotes() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((quotes) => showQuotes(quotes));
}
const showQuotes = (quotes) => {
  const blockQuote = document.querySelector("blockquote");
  blockQuote.innerText = quotes.quote;
};
getQuotes();
