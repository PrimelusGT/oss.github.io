document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

function scrollToSection(id) {
    const targetElement = document.getElementById(id);
    window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
    });
}

var modal = document.getElementById('executorModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the page loads, show the modal
window.onload = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


    document.getElementById('discord-link').addEventListener('click', function() {
        window.location.href = 'https://discord.gg/hJ9RnYAjPb';
    });

function scrollToPricing() {
    var pricingSection = document.getElementById('pricing');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleFaq(item) {
    var answer = item.querySelector('p');
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

    var icon = item.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}

// JavaScript to handle scroll event
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust value as needed
        header.classList.add('navbar-scrolled');
    } else {
        header.classList.remove('navbar-scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('learnMoreButton');
    const fadeInText = document.getElementById('fadeInText');
    let hoverTimer;

    button.addEventListener('mouseover', () => {
        hoverTimer = setTimeout(() => {
            fadeInText.classList.add('show');
        }, 3000); // 3 seconds delay
    });

    button.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
        fadeInText.classList.remove('show');
    });
});

document.querySelector('.copybtn').disabled = false;

window.onload = function() {
    document.body.style.opacity = 1;
};

function redirectToDiscord() {
    setTimeout(() => {
        window.open('https://discord.gg/hJ9RnYAjPb', '_blank');
    }, 100);
}