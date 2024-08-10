
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});


const resumeButton = document.querySelector('.resume-button');
resumeButton.addEventListener('click', () => {
    alert('Your download will begin shortly.');
});

document.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        if(position < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

document.addEventListener('scroll', function() {
    let aboutMeSection = document.querySelector('#selfi .about-me-container');
    let position = aboutMeSection.getBoundingClientRect().top;
    if(position < window.innerHeight) {
        aboutMeSection.classList.add('visible');
    }
});