const quotes = [
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const shareBtn = document.getElementById("shareBtn");

let previousIndex = -1;

function generateQuote() {

    let randomIndex;

    // Prevent the same quote from appearing twice
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    const selectedQuote = quotes[randomIndex];

    quoteElement.textContent = `"${selectedQuote.quote}"`;
    authorElement.textContent = `— ${selectedQuote.author}`;
}

newQuoteBtn.addEventListener("click", generateQuote);

shareBtn.addEventListener("click", async () => {

    const text = `${quoteElement.textContent} ${authorElement.textContent}`;

    if (navigator.share) {

        try {
            await navigator.share({
                title: "Random Quote",
                text: text
            });
        } catch (error) {
            console.log("Sharing cancelled.");
        }

    } else {

        await navigator.clipboard.writeText(text);

        alert("Quote copied to clipboard! 📋");
    }
});