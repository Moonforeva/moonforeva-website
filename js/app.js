const navlinks = document.querySelectorAll('nav a');
const main = document.querySelector('main');

navlinks.forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const page = link.dataset.page;

        const response = await fetch(`${page}.html`);
        const html = await response.text();

        main.innerHTML = html;
    });
});

fetch('pages/home.html')
    .then(response => response.text())
    .then(html => {
        main.innerHTML = html;
    });