// Handle social media icon clicks
document.addEventListener('DOMContentLoaded', () => {
    const githubLink = document.querySelector('.top-icons a[href*="github"]');
    const linkedinLink = document.querySelector('.top-icons a[href*="linkedin"]');

    githubLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/lkduran', '_blank');
    });

    linkedinLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/leah-duran-70227a33b', '_blank');
    });
});
