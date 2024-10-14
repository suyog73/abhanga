// Variable to track current language
let currentLanguage = "Marathi";

// Fetch JSON data
fetch('abhanga_data.json')
    .then(response => response.json())
    .then(data => {
        // Populate the HTML with JSON data
        document.getElementById('title').innerHTML = data.title;
        document.getElementById('abhanga-text').innerHTML = data.abhanga.text;
        document.getElementById('author-name').innerHTML = "— " + data.abhanga.author;

        const audioElement = document.getElementById('audio').getElementsByTagName('source')[0];
        audioElement.src = data.audio;
        document.getElementById('audio').load(); // Reload the audio with the new source

        // Set the initial meaning (Marathi by default)
        document.getElementById('meaning-text').innerHTML = data.meanings.marathi;

        // Handle the language toggle
        const toggleIcon = document.getElementById('toggle-icon');
        toggleIcon.addEventListener('click', () => {
            if (currentLanguage === "Marathi") {
                document.getElementById('meaning-text').innerHTML = data.meanings.english;
                document.getElementById('meaning-heading').innerHTML = "Meaning";
                currentLanguage = "English";
            } else {
                document.getElementById('meaning-text').innerHTML = data.meanings.marathi;
                document.getElementById('meaning-heading').innerHTML = "अर्थ";
                currentLanguage = "Marathi";
            }
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));
