//Testimonials - Owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });   

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1,
        },
    },
});

//mobile nav
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times-circle");
const mobileBG = document.querySelector(".mobile-bg");
const mobileNav = document.querySelector(".mobile-nav");

openIcon.addEventListener('click', () => {
    mobileBG.classList.toggle('display-none');
    mobileNav.classList.remove('slide-out');
    mobileNav.classList.toggle('slide-in');
    openIcon.classList.toggle('display-none')
});

closeIcon.addEventListener('click', () => {
 setTimeout(()=> {
    mobileBG.classList.toggle('display-none');
    openIcon.classList.toggle('display-none');
 },500);
 mobileNav.classList.toggle("slide-in");
 mobileNav.classList.toggle("slide-out");
});

//thank you popup
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add ("open-popup");
}

function closePopup() {
    popup.classList.remove ("open-popup");
}

// Newsletter close button
const closeButton = document.querySelector('#close-popup');
const newsletterPopup = document.querySelector('#newsletter-popup');

closeButton.addEventListener('click', () => {
  newsletterPopup.style.display = 'none';
});


// Newsletter connection to google sheet
// Get the form elements
const forms = document.querySelector("form");
const emailInput = document.querySelector("input[name='Email']");
const thankYouMessage = document.querySelector("#thanks");

// Hide the thank you message by default
thankYouMessage.style.display = "none";

// Add a submit event listener to the form
forms.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the email address from the input
  const email = emailInput.value;

  // Validate the email address
  if (validateEmail(email)) {
    // If the email is valid, display the thank you message
    thankYouMessage.style.display = "block";
  } else {
    // If the email is invalid, show an error message
    alert("Please enter a valid email address.");
  }
});

//close after 3s + validate domain
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (emailRegex.test(email)) {
      const emailParts = email.split('@');
      const emailDomain = emailParts[1];
      const validDomains = ['.com', '.co', '.net', '.org', '.edu', '.cz'];
  
      if (validDomains.some(function(domain) { return emailDomain.endsWith(domain) })) {
        document.querySelector('#thanks').style.display = 'block';
        setTimeout(function() {
          document.querySelector('.newsletter').style.display = 'none';
        }, 3000);
      } else {
        alert('Please enter a valid email address with a valid domain (e.g. .com, .co, .net, .cz, etc.).');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  });

  //google sheet connection
  
  
  
  
  
  




