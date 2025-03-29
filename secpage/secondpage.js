function searchArticles() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const title = article.querySelector('a').textContent.toLowerCase();
        const description = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

function filterByYear(year) {
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const description = article.querySelector('p').textContent;
        const match = description.match(/\b\d{4}\b/); // Extract year from description
        const articleYear = match ? parseInt(match[0]) : null;

        if (articleYear && articleYear >= year) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

function searchCustomRange() {
    const startYear = parseInt(document.getElementById('start-year').value);
    const endYear = parseInt(document.getElementById('end-year').value);
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const description = article.querySelector('p').textContent;
        const match = description.match(/\b\d{4}\b/); // Extract year from description
        const articleYear = match ? parseInt(match[0]) : null;

        if (articleYear && articleYear >= startYear && articleYear <= endYear) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

function sortBy(criteria) {
    const container = document.querySelector('.container');
    const articles = Array.from(document.querySelectorAll('.article'));

    articles.sort((a, b) => {
        if (criteria === 'date') {
            const yearA = parseInt(a.querySelector('p').textContent.match(/\b\d{4}\b/)[0]);
            const yearB = parseInt(b.querySelector('p').textContent.match(/\b\d{4}\b/)[0]);
            return yearB - yearA; // Sort by descending year
        } else if (criteria === 'relevance') {
            return a.querySelector('a').textContent.localeCompare(b.querySelector('a').textContent);
        }
    });

    // Clear and re-append sorted articles
    articles.forEach(article => container.appendChild(article));
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdown-menu');
    const profileIcon = document.querySelector('.profile-icon');
    if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});