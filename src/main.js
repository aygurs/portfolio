import './libraries.js';

//add event listeners to menu buttons
let accessMenuButton = document.getElementById('access-button');
accessMenuButton.addEventListener("click", openAccessMenu);

let hamburgerMenuButton = document.getElementById('nav-hamburger-menu');
hamburgerMenuButton.addEventListener("click", openHamburgerMenu);

let fontSizeButton = document.getElementById('font-increase-button');
fontSizeButton.addEventListener("click", fontSizeChange)

let englishLangButton = document.getElementsByClassName('access-button en')[0];
englishLangButton.addEventListener("click", function() { switchLanguage('en'); });

let frenchLangButton = document.getElementsByClassName('access-button fr')[0];
frenchLangButton.addEventListener("click", function() { switchLanguage('fr'); });

let spanishLangButton = document.getElementsByClassName('access-button es')[0];
spanishLangButton.addEventListener("click", function() { switchLanguage('es'); });

//Opens accessibility menu on click
function openAccessMenu() {
    let accessMenu = document.getElementById('nav-access-menu');
    accessMenu.classList.toggle('active');
};
//Opens hamburger menu on click (tablet/mobile sites)
function openHamburgerMenu() {
    let hamburgerMenu = document.getElementById('hamburger-list');
    hamburgerMenu.classList.toggle('active')
}

//Accessibility functions
//Keeps track of clicks
let fontClicks = 0
//Map is used to keep ordered list with key:value pairs
let originalFontSizes = new Map();

//Function to change font size
function fontSizeChange() {
    //Accesses all elements on page
    let elements = document.querySelectorAll('*');
    //Increases clicks by 1
    fontClicks +=1

    //For each element on the page
    elements.forEach(function(element){
        //Stores original font sizes of each element to refer back to (this is here in case separate pages are added in the future)
        //This keeps increase and decrease uniform no matter how many clicks
        if (!originalFontSizes.has(element)) {
            let style = window.getComputedStyle(element);
            let originalFontSize = parseFloat(style.getPropertyValue('font-size'));
            originalFontSizes.set(element, originalFontSize);
        }

        //Get original font size of element
        let originalFontSize = originalFontSizes.get(element);
        //New font size variable created
        let newFontSize

        // If element is a link, paragraph or title tag (text element)
        if(element.tagName === 'A' || element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2'){
            if(fontClicks === 1){
                //Increase by 10%
                newFontSize = originalFontSize * 1.1
                element.style.fontSize = newFontSize + 'px'
            }
            else if(fontClicks === 2){
                //Increase by 20%
                newFontSize = originalFontSize * 1.2
                element.style.fontSize = newFontSize + 'px'
            }
            else{
                //Set back to original size
                element.style.fontSize = originalFontSize + 'px'
            }
        }

        //When clicks is 3, reset to 0
        if(fontClicks === 3){
            fontClicks = 0
        }
    })  
}

//TEMPORARY DEPRECATED - Dark/Light mode function
//Dark or Light mode button
//Store theme in local storage, default is dark (this is here in case separate pages are added in the future)
//It says 'light' as default, but function is ran on load so it will be opposite
let currentMode = localStorage.getItem('theme') || 'light'

//Target button
// let modeButton = document.getElementById('mode-button');
// modeButton.addEventListener("click", modeCheck)

//Map is used to keep ordered list with key:values
let originalBgColours = new Map();

//Checks current mode and switches
function modeCheck(){
    if(currentMode === 'dark'){
        currentMode = 'light'
    }
    else{
        currentMode = 'dark'
    };

    //Updates local storage mode
    localStorage.setItem('theme', currentMode);
    //Applies mode to pages
    modeChange();
};

//Function that applies mode to pages
function modeChange() {
    //Accesses all elements on page
    let elements = document.querySelectorAll('*');
    //Accesses all images that have light/dark variant
    let navLogo = document.getElementById("logo");
    let fontButton = document.getElementById("font-increase-button");
    let modeButton = document.getElementById("mode-button");
    let englishButton = document.getElementById("english-lang-button");
    let frenchButton = document.getElementById("french-lang-button");
    let spanishButton = document.getElementById("spanish-lang-button");
    let fbLogo = document.getElementById("footer-fb-logo");
    let linkedinLogo = document.getElementById("footer-linkedin-logo");
    let githubLogo = document.getElementById("footer-github-logo");
    let links = document.querySelectorAll('a');

    //Loops over each element
    elements.forEach(function(element){
         //Stores original bg colours of each element (this is here in case separate pages are added in the future)
        if (!originalBgColours.has(element)) {
            let style = window.getComputedStyle(element);
            let originalBgColour = style.getPropertyValue('background-color');
            originalBgColours.set(element, originalBgColour);
        }
        //Original background colour variable
        let originalBgColour = originalBgColours.get(element);
        //Current background colour variable
        let style = window.getComputedStyle(element);
        let currentBgColour = style.getPropertyValue('background-color');
        
        //If it is dark mode
        if(currentMode === 'dark'){
            //If bg colour is dark, and original bg colour was dark, turn to light
            if(currentBgColour === 'rgb(15, 29, 43)' && originalBgColour === 'rgb(15, 29, 43)'){
                element.style.backgroundColor = 'rgb(250, 249, 246)'
                element.style.color = 'rgb(15, 29, 43)'
                navLogo.src = "media/images/logo-black.png"
                fontButton.src = "media/images/text-increase-icon-black.png"
                modeButton.src = "media/images/moon-icon-black.png"
                englishButton.src = "media/images/en-icon-black.png"
                frenchButton.src = "media/images/fr-icon-black.png"
                spanishButton.src = "media/images/es-icon-black.png"
                fbLogo.src = "media/images/fb-logo-black.png"
                linkedinLogo.src = "media/images/linkedin-logo-black.png"
                githubLogo.src = "media/images/github-logo-black.png"
            }
            //If bg colour is light, and original bg colour was light, turn to dark
            else if(currentBgColour === 'rgb(250, 249, 246)' && originalBgColour === 'rgb(250, 249, 246)'){
                //If the element is an input field, don't change the colour
                if(element.tagName === 'INPUT'){
                    //Do nothing
                }
                else{
                    element.style.backgroundColor = 'rgb(15, 29, 43)'
                    element.style.color = 'rgb(250, 249, 246)'
                }
            }
        }
        //If it is light mode
        else if(currentMode === 'light'){
            //If bg colour is light, and original bg colour was dark, turn to dark
            if(currentBgColour === 'rgb(250, 249, 246)' && originalBgColour === 'rgb(15, 29, 43)'){
                element.style.backgroundColor = 'rgb(15, 29, 43)'
                element.style.color = 'rgb(250, 249, 246)'
                navLogo.src = "media/images/logo-white.png"
                fontButton.src = "media/images/text-increase-icon-white.png"
                modeButton.src = "media/images/sun-icon-white.png"
                englishButton.src = "media/images/en-icon-white.png"
                frenchButton.src = "media/images/fr-icon-white.png"
                spanishButton.src = "media/images/es-icon-white.png"
                fbLogo.src = "media/images/fb-logo-white.png"
                linkedinLogo.src = "media/images/linkedin-logo-white.png"
                githubLogo.src = "media/images/github-logo-white.png"
            }
            //If bg colour is dark, and original bg colour was light, turn to light
            else if(currentBgColour === 'rgb(15, 29, 43)' && originalBgColour === 'rgb(250, 249, 246)'){
                element.style.backgroundColor = 'rgb(250, 249, 246)'
                element.style.color = 'rgb(15, 29, 43)'
            }
        }
        //Change link colours (override CSS specificity)
        links.forEach(function(link) {
            let computedStyle = window.getComputedStyle(link);
            let currentLinkColor = computedStyle.getPropertyValue('color');

            if (currentMode === 'dark') {
                // If the link is dark (assuming dark mode has a dark text color), change to light text
                if (currentLinkColor === 'rgb(15, 29, 43)') { // Dark text color
                    //
                } 
                // If it's light, change it to dark text
                else if (currentLinkColor === 'rgb(250, 249, 246)') { // Light text color
                    link.style.color = 'rgb(15, 29, 43)'; // Dark text color
                }
            } else if (currentMode === 'light') {
            
                // If the link is light (assuming light mode has a light text color), change to dark text
                if (currentLinkColor === 'rgb(250, 249, 246)') { // Light text color
                    //
                } 
                // If it's dark, change it to light text
                else if (currentLinkColor === 'rgb(15, 29, 43)') { // Dark text color
                    link.style.color = 'rgb(250, 249, 246)'; // Light text color
                }
            }
        });
    });
};
//Runs on load
modeChange();

//Switch language
//Stores current language in local storage (this is here in case separate pages are added in the future)
//Default is English
let currentLang = localStorage.getItem('lang') || 'en'

//Function to switch page language
function switchLanguage(lang){
    //Accesses all elements with .lang class
    const allElements = document.querySelectorAll('.lang');

    //Goes over each element and applies .hidden class
    allElements.forEach(element => {
        element.classList.add('hidden');
    });

    //Accesses all elements with class of chosen language
    const langElements = document.querySelectorAll('.' + lang);
    //Removes .hidden class from each element of chosen language
    langElements.forEach(element => {
        element.classList.remove('hidden');
    });

    //Updates current language chosen
    currentLang = lang
    //Updates language to local storage
    localStorage.setItem('lang', currentLang);
}
//Runs on load
switchLanguage(currentLang)

document.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const hero = document.querySelector("#hero-main-container");
    const accessMenu = document.getElementById('nav-access-menu');
    const navReappearPoint = hero.offsetTop + 150;

    if (window.scrollY > navReappearPoint) {
        nav.classList.add("scrolled");
        accessMenu.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        accessMenu.classList.remove("scrolled");
    }
});
