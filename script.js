// Grabs elements from the DOM
const quoteContainer = document.querySelector('.quote-container');
const button = document.querySelector('.generate-quote');

async function fetchQuote() {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      quoteContainer.innerHTML = `
      <h6>"${data.content}"</h6>
      <p class="text-secondary"><em>- ${data.author}</em></p>
    `;
    });
}

fetchQuote();
