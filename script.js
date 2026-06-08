// ==========================================================================
// Portfolio Theme Toggle System (Emoji Version)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // 1. Check for a previously saved theme, default to dark mode
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    // 2. Apply initial theme configuration on page load
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
        if (themeToggle) themeToggle.textContent = '🌙';
    } else {
        htmlElement.classList.remove('dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    // 3. Listen for clicks on the toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                // Switch to Light Mode
                htmlElement.classList.remove('dark');
                localStorage.setItem('portfolio-theme', 'light');
                themeToggle.textContent = '☀️';
            } else {
                // Switch to Dark Mode
                htmlElement.classList.add('dark');
                localStorage.setItem('portfolio-theme', 'dark');
                themeToggle.textContent = '🌙';
            }
        });
    }
});