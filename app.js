// email elements
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Send email function from https://www.emailjs.com/
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (name.value === '' || email.value === '' || message.value === '') {
          alert('Please complete all fields before sending message.');
        } else {
          // log in https://dashboard.emailjs.com to get service id and user id
          emailjs.sendForm('service_4dftmcc', 'contact_form', this)
              .then(function() {
                  alert('Sent! Thank you for the message, I will get back to you promptly.');
                  name.value = '';
                  email.value = '';
                  message.value = '';
              }, function(error) {
                  alert('FAILURE...', error);
              });
        }

    });
};

//display and hide more info overlay for each project
moreInfoBtns = document.querySelectorAll('.more-info-button');

for (let i = 0; i < moreInfoBtns.length; i++) {
  moreInfoBtns[i].addEventListener('click', e => {
    const button = e.target;
    const overlays = document.querySelectorAll('.overlay');

    if (button.value === 'hidden') {
      button.value = 'displayed';
      button.textContent = 'Hide Info';

      for (let i = 0; i < overlays.length; i++) {
        if (overlays[i].title === button.title) {
          overlays[i].style.opacity = '.7';
          overlays[i].style.transform = 'translateX(0)';
        }
      }
    } else if (button.value === 'displayed') {
      button.value = 'hidden';
      button.textContent = 'More Info';

      for (let i = 0; i < overlays.length; i++) {
        if (overlays[i].title === button.title) {
          overlays[i].style.opacity = '.7';
          overlays[i].style.transform = 'translateX(-100%)';
        }
      }
    }
  });
}
