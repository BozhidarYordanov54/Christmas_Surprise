const searchBar = document.getElementById('search-bar');
const historyWrapper = document.querySelector('.history-wrapper');

searchBar.addEventListener('click', () => {
    historyWrapper.classList.add('active');
});

document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && !historyWrapper.contains(event.target)) {
        historyWrapper.classList.remove('active');
    }
});