// Fetch the JSON data
async function fetchAbhangas() {
    const response = await fetch("abhanga_data.json");
    return await response.json();
}

// Load all abhangas on the homepage
async function loadAbhangaList() {
    const abhangas = await fetchAbhangas();
    const abhangaListContainer = document.getElementById("abhanga-list");

    abhangas.forEach((abhanga) => {
        const abhangaItem = document.createElement("div");
        abhangaItem.className = "abhanga-item";

        // Create a link that wraps the whole div content
        abhangaItem.innerHTML = `
            <a href="abhanga.html?id=${abhanga.id}" class="abhanga-link">
                || अभंग ${abhanga.id} ||
            </a>`;

        abhangaListContainer.appendChild(abhangaItem);
    });
}


// Check if we're on the homepage or detail page
if (window.location.pathname.includes("index.html")) {
    window.onload = loadAbhangaList;
}

// Check if we're on the homepage or detail page
if (window.location.pathname.includes("/")) {
    window.onload = loadAbhangaList;
}
