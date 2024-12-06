"use strict";

var rotate = 0;

function like() {
    let ratio = document.querySelector(".ratio");
    ratio.style.display = "flex";
}

function ratio() {
    document.location.href = "https://fr.wikipedia.org/wiki/69_(homonymie)";
}

function sang() {
    let sang = document.querySelector(".sang");
    sang.classList.add("active");
}

function flopmode() {
    let cle = document.querySelector(".home .illustration");
    rotate = rotate + 30;
    cle.style.transform = "rotate(" + rotate + "deg)";

    if (rotate >= 90) {
        cle.style.transform = "rotate(" + 500 + "deg)";
        const cssFile = "flop.css";
        const cssLinkIndex = 0;
        var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);

        document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
    }
}
const targetElement = document.getElementById('freepik--Brain--inject-6');
const tooltip = document.getElementById('tooltip');

targetElement.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.right-100 }px`; 
    tooltip.style.top = `${rect.top-100}px`;
});

targetElement.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip.style.display = 'none';
});
const targetElement1 = document.getElementById('freepik--Heart--inject-6');
const tooltip1 = document.getElementById('tooltip1');

targetElement1.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip1.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip1.style.left = `${rect.right-90 }px`; 
    tooltip1.style.top = `${rect.top-90}px`;
});

targetElement1.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip1.style.display = 'none';
});


const targetElement2 = document.getElementById('freepik--Kidneys--inject-6');
const tooltip2 = document.getElementById('tooltip2');

targetElement2.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip2.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip2.style.left = `${rect.right-100 }px`; 
    tooltip2.style.top = `${rect.top-100}px`;
});

targetElement2.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip2.style.display = 'none';
});

const targetElement3 = document.getElementById('freepik--Stomach--inject-6');
const tooltip3 = document.getElementById('tooltip3');

targetElement3.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip3.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip3.style.left = `${rect.right-100 }px`; 
    tooltip3.style.top = `${rect.top-100}px`;
});

targetElement3.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip3.style.display = 'none';
});

const targetElement4 = document.getElementById('freepik--Intestine--inject-6');
const tooltip4 = document.getElementById('tooltip4');

targetElement4.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip4.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip4.style.left = `${rect.right-500 }px`; 
    tooltip4.style.top = `${rect.top-100}px`;
});

targetElement4.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip4.style.display = 'none';
});
const targetElement5 = document.getElementById('freepik--Spleen--inject-6');
const tooltip5 = document.getElementById('tooltip5');

targetElement5.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip5.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip5.style.left = `${rect.right-600 }px`; 
    tooltip5.style.top = `${rect.top-100}px`;
});

targetElement5.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip5.style.display = 'none';
});


const targetElement6 = document.getElementById('freepik--Liver--inject-6');
const tooltip6 = document.getElementById('tooltip6');

targetElement6.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip6.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip6.style.left = `${rect.right-500 }px`; 
    tooltip6.style.top = `${rect.top-50}px`;
});

targetElement6.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip6.style.display = 'none';
});

const targetElement7 = document.getElementById('freepik--Lungs--inject-6');
const tooltip7 = document.getElementById('tooltip7');

targetElement7.addEventListener('click', (event) => {
    // Afficher le conteneur
    tooltip7.style.display = 'block';

    // Positionner le conteneur à côté de l'élément
    const rect = event.target.getBoundingClientRect();
    tooltip7.style.left = `${rect.right-700 }px`; 
    tooltip7.style.top = `${rect.top-150}px`;
});

targetElement7.addEventListener('mouseleave', () => {
    // Cacher le conteneur
    tooltip7.style.display = 'none';
});