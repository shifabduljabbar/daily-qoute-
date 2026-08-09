async function loadQuotes() {
    try {
        const response = await fetch("quotes.json");

        if (!response.ok) {
            throw new Error("Could not find quotes.json");
        }

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

    // Creates a number based on today's date
    const startDate = new Date("2026-08-01");

    // Calculate how many days have passed
    const difference =
        today.setHours(0, 0, 0, 0) -
        startDate.setHours(0, 0, 0, 0);

    const daysPassed =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    // Pick one quote based on the day
    const quoteIndex =
        daysPassed % quotes.length;

    const todaysQuote =
        quotes[quoteIndex];


    // Display quote
    document.getElementById("quote").textContent =
        todaysQuote.text;


    // Display date
    document.getElementById("date").textContent =
        today.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric"
        });
}


loadQuotes();
