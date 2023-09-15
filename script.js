//your code here

function sortBandsWithoutArticles(bandNames) {
            return bandNames.sort((a, b) => {
                const removeArticles = name => name.replace(/^(a|an|the)\s+/i, '');
                const nameA = removeArticles(a).toLowerCase();
                const nameB = removeArticles(b).toLowerCase();
                return nameA.localeCompare(nameB);
            });
        }

        // Array of band names
        const bandNames = [
            "The Beatles",
            "Led Zeppelin",
            "Aerosmith",
            "Nirvana",
            "The Rolling Stones",
            "Red Hot Chili Peppers",
            "Queen",
            "Metallica",
            "Anthrax"
        ];

        // Sort the band names
        const sortedBands = sortBandsWithoutArticles(bandNames);

        // Get the ul element
        const ulElement = document.getElementById('band');

        // Populate the ul with sorted band names
        sortedBands.forEach(bandName => {
            const liElement = document.createElement('li');
            liElement.textContent = bandName;
            ulElement.appendChild(liElement);
        });