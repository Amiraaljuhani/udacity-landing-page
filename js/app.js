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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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
const navLists=document.querySelector("#navbar__list");
window.addEventListener("DOMContentLoaded",() => {
  const sections=document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionName=section.firstElementChild.firstElementChild.textContent;
    const li =document.createElement("li");
    li.textContent=sectionName;
    navLists.append(li);
    // Scroll to anchor ID using scrollTO event
    sectionsLink=section.getAttribute('id');
    li.innerHTML = `<a class='menu__link'  href='#${sectionsLink}'>${sectionName} </a> `; })
   
})

// build the nav

// Add class 'active' to section when near top of viewport


// on window scroll
window.addEventListener('scroll', (e) => {

  // get all sections on the page
  const sections = document.querySelectorAll('section');

  // loop through each section
  sections.forEach( section => {

    // get px distance from top
    const top = section.getBoundingClientRect().top;

    // if the distance to the top is between 0-100px
    if (top > 0 && top < 100) {
      section.classList.add('your-active-class');

    // otherwise, remove the class
    } else {
      section.classList.remove('your-active-class');
    }
  });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const footer = document.querySelector('footer');

// Start of GO UP Button
//Create the div element for the button 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// Set sections as active

window.addEventListener("scroll", ()=>{
  const sections = document.querySelectorAll("section")
  const lis = document.querySelectorAll("li")
    for(let i = 0; i < sections.length; i++){
        if(window.scrollY +10 > sections[i].offsetTop  ){
            lis.forEach(li => li.classList.remove("active"))
            lis[i].classList.add("active")
        }else{
            lis[i].classList.remove("active")
        }
        
    }
  });
  
  setTimeout(() => {
    const lip = document.querySelectorAll(".menu__link");
    lip.forEach((li) => {
      li.addEventListener("click", (e) => {
        console.log("clicked");
        e.preventDefault();
        const currentId = e.target.attributes.href.value;
        console.log(currentId);
        const sectionb = document.querySelector(currentId);
        sectionb.scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }, 1000);