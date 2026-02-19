/* --- Theme Switcher --- */
const themeButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.documentElement;

const savedTheme = localStorage.getItem('selected-theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? 'light_mode' : 'dark_mode';
}

themeButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? 'light_mode' : 'dark_mode';
    
    localStorage.setItem('selected-theme', newTheme);
});


