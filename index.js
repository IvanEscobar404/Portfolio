/******************* toggle icon navbar ********************* */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{ 
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
} 


/******************* scroll section active link ************* */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

/********************** sticky navbar *********************** */
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


/******************** remove toggle icon and navbar ************************ */
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};


/******************* scroll reveal *********************** */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});


/************************ typed js ***************************  */
const typed = new Typed('.multiple-text', {
    strings: ['Software and Web Developer', 'Video Editor'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


// Initialize EmailJS
emailjs.init('vsQTVEyE2tQnRCIIl'); // User ID de EmailJS

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'default_service'; // Service ID de EmailJS
    const templateID = 'template_rc0izvn'; // Template ID de EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Message';
            alert('Enviado breoo!');
        }, (err) => {
            btn.value = 'Send Message';
            alert('Failed to send message. Please try again.');
            console.error('Error:', err);
        });
});