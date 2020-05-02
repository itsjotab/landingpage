/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//  var Nav Global
const navBar = document.querySelector('#navbar__list');
// var Section Global
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navContainer = () => {

    let navUL = '';
    // looping over list section
    sections.forEach(section => {
        
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
    
    navUL += `<li><a class="menu" href ='#${sectionID}'>${sectionDataNav}</a></li>`
    });
  // appending elements with nav 
    
  navBar.innerHTML = navUL;
};


// Add class 'active' to section when near top of viewport
//getting value of position
const value = (section) => {
    return Math.floor (section.getBoundingClientRect().top);
};
// remove your active class
const removeActive = (section) => {
    sections.classList.remove('your-active-class');
};
// add active class
const addActive = (conditonal, section) => {
    if(conditonal){
        sections.classList.add('your-active-class');
    };
};
//function implementing
const sectionActivation = () => {
    section.forEach(section => {
        const elementOffset = position(section);
 
        inviewport = () => elementOffset < 100 && elementOffset >= -100;

    removeActive(section);
    addActive(inviewport(), section);
  });
};
//event listnener
navBar.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event
function scrollToClick() {
    navBar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#sectionID' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navContainer();
// Scroll to section on link click
scrollToClick();
// Set sections as active