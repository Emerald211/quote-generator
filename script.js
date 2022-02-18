const quoteContainer = document.getElementById ('quote-container');
const quoteText = document.getElementById ('quote');
const authorText = document.getElementById ('author');
const twitterBtn = document.getElementById ('twitter');
const newQuoteBtn = document.getElementById ('new-quote');



let apiQuotes = [];
// Get Quotes from API

// Pick a random quote from the api
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // Check author if not there replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown" ;
    } else {
        authorText.textContent = quote.author ;
    }

    // Check quote length to determine styling

    


    quoteText.textContent = quote.text;
}


async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error here
    }

}

// On load

getQuotes(); 

newQuoteBtn.addEventListener("click", getQuotes)
