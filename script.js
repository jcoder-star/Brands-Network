document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    // Define the searchable content
    const content = {
        home: document.getElementById('content-home').innerText.toLowerCase(),
        business: document.getElementById('content-business').innerText.toLowerCase(),
        // Add more sections as needed
    };

    // Search through the content
    const results = Object.entries(content).filter(([key, text]) => text.includes(query));

    // Display results
    if (results.length > 0) {
        resultsContainer.innerHTML = `<ul>${results.map(([key, text]) => `<li>${key}: ${text}</li>`).join('')}</ul>`;
    } else {
        resultsContainer.innerHTML = 'Error: No results found.';
    }
});
