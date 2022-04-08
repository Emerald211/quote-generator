const quoteContainer = document.getElementById ('quote-container');
const quoteText = document.getElementById ('quote');
const authorText = document.getElementById ('author');
const twitterBtn = document.getElementById ('twitter');
const newQuoteBtn = document.getElementById ('new-quote');
const loader = document.getElementById('load');


// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;

}

function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}


let apiQuotes = [];
// Get Quotes from API

// Pick a random quote from the api
function newQuote() {
    loading();

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // Check author if not there replace with "Unknown"
    if (!quote.author) {
        authorText.textContent = "Unknown" ;
    } else {
        authorText.textContent = quote.author ;
    }

    // Check quote length to determine styling

    

    
    quoteText.textContent = quote.text;
    complete();
    
}




async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error here
    }
}

function tweetQuote() {
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `http://twitter.com/intent/tweet?text=${quote} - author=${author}`
    window.open(twitterUrl, "_blank")
    
}

twitterBtn.addEventListener ('click', tweetQuote)


// On load

getQuotes(); 



newQuoteBtn.addEventListener("click", getQuotes)
