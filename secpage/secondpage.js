document.getElementById('search-text').addEventListener('click', function(event) {
    event.preventDefault();
    var searchPopup = document.getElementById('search-popup');
    if (searchPopup.style.display === 'none' || searchPopup.style.display === '') {
        searchPopup.style.display = 'block';
    } else {
        searchPopup.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('search-popup').contains(event.target) || document.getElementById('search-icon').contains(event.target);
    if (!isClickInside) {
        document.getElementById('search-popup').style.display = 'none';
    }
});