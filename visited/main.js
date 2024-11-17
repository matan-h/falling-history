const fetchTopSites = async () => {
    try {
        // Fetch the list of top 5000 URLs from the correct path
        const response = await fetch('/top-5000.txt');
        const data = await response.text();

        // Split the content of the file into an array of URLs, trimming each line
        const urls = data.split('\n').filter(url => url.trim() !== '');

        // Create a container for the links
        const container = document.createElement('div');
        container.classList.add('link-container'); // Add CSS class for styling

        // Generate a "dot" for each URL and append to the container
        urls.forEach(url => {
            let validUrl = url.trim();
                validUrl = 'https://' + validUrl; // Add "https://" if missing

            const a = document.createElement('a');
            a.href = validUrl;  // Set the href attribute (though it won't be clickable)
            a.classList.add('dot');  // Add CSS class for styling
            a.textContent = '.';  // Set the text of the link to '.'
            container.appendChild(a);
        });

        // Append the generated container to the body
        document.getElementById('app').appendChild(container);
    } catch (error) {
        console.error('Error fetching the list of top sites:', error);
    }
};

// Call the function to generate the list when the page loads
window.onload = fetchTopSites;
