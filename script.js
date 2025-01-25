// Function to fetch a random quote from the API Ninja's Quotes API
async function fetchQuote() {
    const apiKey = 'W6RN4BgxLg072rd18HXJmw==bmRzleTUQyaprNOJ'; // Replace with your API Ninja key
    const url = 'https://api.api-ninjas.com/v1/quotes'; // API endpoint for quotes

    try {
        // Fetch a random quote from API Ninja
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        const data = await response.json();

        // Update the HTML with the fetched quote and author
        document.getElementById('quote').textContent = data[0].quote;
        document.getElementById('auth').textContent = - ${data[0].author};
    } catch (error) {
        console.error('Error fetching quote:', error);
        // Show an error message if the API request fails
        document.getElementById('quote').textContent = 'Sorry, we could not load a new quote at the moment.';
        document.getElementById('auth').textContent = '- Error';
    }
}

// Function to change the quote when the button is clicked
function changer() {
    fetchQuote();
}

// Call fetchQuote initially to display a random quote on page load
fetchQuote();
function share(platform) {
    const quoteText = document.getElementById('quote').innerText;
    const authorText = document.getElementById('auth').innerText;
    let url = '';

    if (platform === 'Face') {
        url = https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://example.com')}&quote=${encodeURIComponent(quoteText + ' ' + authorText)};
    } else if (platform === 'Twit') {
        url = https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + ' ' + authorText)};
    } else if (platform === 'Insta') {
        url = https://www.instagram.com/?url=${encodeURIComponent('https://example.com')}&summary=${encodeURIComponent(quoteText + ' ' + authorText)};
    }
     else if (platform === 'Wapp') {
        
         
        url =  `https://api.whatsapp.com/ `;
       }
    

    window.open(url, '_blank');
}
