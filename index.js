document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    function changeNavLink() {
      let currentSection = '';
      const headerHeight = document.querySelector('header').offsetHeight;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.clientHeight;
  
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', changeNavLink);
  });
 function scrollToContact(){
  var contactsection = document.getElementById('contact');
  contactsection.scrollIntoView({behavior:"smooth"});
 }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu .classList.toggle("active");
})

document.querySelectorAll("nav li a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



