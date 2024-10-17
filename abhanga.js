// Fetch the JSON data
async function fetchAbhangas() {
    const response = await fetch('abhanga_data.json'); // Ensure this path is correct
    return await response.json();
}

// Get the ID from the URL
function getIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load the abhanga based on the ID
async function loadAbhanga() {
    const abhangas = await fetchAbhangas();
    const id = getIdFromUrl();

    const abhanga = abhangas.find(item => item.id == id);

    if (abhanga) {
        document.getElementById('abhanga-title').textContent = abhanga.title;
        document.getElementById('music-player').innerHTML = `
            <audio controls>
                <source src="${abhanga.audio}" type="audio/mpeg">
                Your browser does not support the audio tag.
            </audio>
        `;
        document.getElementById('abhanga-text').innerHTML = `
            <p>${abhanga.abhanga.text}</p>
            <br>
            <p class="author">— ${abhanga.abhanga.author}</p>
        `;
        document.getElementById('meaning-heading').textContent = "अर्थ"; // Default heading in Marathi
        document.getElementById('meaning-text').textContent = abhanga.meanings.marathi; // Default meaning in Marathi
    } else {
        document.getElementById('container').innerHTML = "<h2>Abhanga not found!</h2>";
    }

    // Language toggle functionality
    const toggleIcon = document.getElementById('toggle-icon');
    toggleIcon.addEventListener('click', () => {
        if (document.getElementById('meaning-heading').textContent === "अर्थ") {
            document.getElementById('meaning-heading').textContent = "Meaning"; // Change to English
            document.getElementById('meaning-text').textContent = abhanga.meanings.english; // Change to English meaning
        } else {
            document.getElementById('meaning-heading').textContent = "अर्थ"; // Change back to Marathi
            document.getElementById('meaning-text').textContent = abhanga.meanings.marathi; // Change back to Marathi meaning
        }
    });
}

// Load the abhanga when the page is ready
window.onload = loadAbhanga;
