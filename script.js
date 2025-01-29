document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const navList = document.getElementById('nav-list');
    const menuToggle = document.getElementById('mobile-menu');

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
