async function loadQuotes() {
    try {
        const response = await fetch("quotes.json");

        const quotes = await response.json();

        showDailyQuote(quotes);

    } catch (error) {
        console.error("Could not load quotes:", error);

        document.getElementById("quote").textContent =
            "Couldn't load your quotes.";
    }
}


function showDailyQuote(quotes) {

    const today = new Date();

    const dateNumber =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate();


    const quoteIndex = dateNumber % quotes.length;

    const todaysQuote = quotes[quoteIndex];


    document.getElementById("quote").textContent =
        todaysQuote.text;


    document.getElementById("date").textContent =
        today.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric"
        });
}


loadQuotes();