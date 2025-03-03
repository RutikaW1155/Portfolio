/*// /==================== toggle icon navbar ====================/
let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
// /==================== scroll sections active link ====================/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

//   /==================== sticky navbar ====================/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

//   /==================== remove toggle icon and navbar when click navbar link (scroll) ====================/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};
// /==================== scroll reveal ====================/
ScrollReveal({
    // reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

// /==================== typed js ====================/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
 
// ... (same as your original code)

// /==================== typed js ====================/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 10
});
*/


let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(let tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

// /==================== scroll sections active link ====================/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

//   /==================== sticky navbar ====================/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

//   /==================== remove toggle icon and navbar when click navbar link (scroll) ====================/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// /==================== scroll reveal ====================/
ScrollReveal({
    // reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

// /==================== typed js ====================/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function opentab(tabname, event) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none"; // Hide all tab contents
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link"); // Remove active class from all tab links
    }
    document.getElementById(tabname).style.display = "block"; // Show the selected tab
    event.currentTarget.classList.add("active-link"); // Add active class to the clicked tab
  }