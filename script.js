// Grabs elements from the DOM
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author');
const button = document.querySelector('.generate-quote');

async function fetchQuote() {
  // Grabs the random quote and converts it to JSON
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();

  // Changes the inner HTML of the quote and quote-author element to their matching pieces of data
  quote.innerHTML = `${data.content}`;
  quoteAuthor.innerHTML = `<em>- ${data.author}</em>`;
}

fetchQuote();
