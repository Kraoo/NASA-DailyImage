// Nasa API
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => {
        document.getElementById('apodImage').src = data.url;
        document.getElementById('apodExplanation').innerHTML = `<p>${data.title}</p><p>${data.explanation}</p>`;
    })
    .catch(error => console.error('Error fetching data:', error));

// Dark Mode
function setDarkMode(isDark) {
    const body = document.body;
    const container = document.querySelector('.container');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (isDark) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '🌕';
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌑';
    }

    localStorage.setItem('darkMode', isDark);
}

function toggleDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(!isDarkMode);
}

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

const isDarkMode = localStorage.getItem('darkMode') === 'true';
setDarkMode(isDarkMode);