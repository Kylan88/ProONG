// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('recherche-input');

    searchIcon.addEventListener('click', () => {
        if (searchInput.style.width === '0px' || searchInput.style.width === '') {
            searchInput.style.width = '200px';
            searchInput.style.opacity = '1';
            searchInput.focus();
        } else {
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.recherches')) {
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
        }
    });
});
