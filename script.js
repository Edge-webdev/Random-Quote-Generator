// Grabs elements from the DOM
const quoteContainer = document.querySelector('.quote-container');
const button = document.querySelector('.generate-quote');

async function fetchQuote() {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      quoteContainer.innerHTML = `
      <h4 class="quote">${data.content}</h4>
      <p class="quote-author"><em>- ${data.author}</em></p>
    `;
    });
}

fetchQuote();
