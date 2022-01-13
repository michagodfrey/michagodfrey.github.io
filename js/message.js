// email elements
const sender = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const loading = document.getElementById('loading');

// Send email function from https://www.emailjs.com/
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (sender.value === '' || email.value === '' || message.value === '') {
          alert('Please complete all fields before sending message.');
        } else {
            loading.style.display = "flex";
          // log in https://dashboard.emailjs.com to get service id and user id
            emailjs.sendForm('service_4dftmcc', 'contact_form', this)
              .then(function() {
                  alert('Sent! Thank you for the message, I will get back to you shortly.');
                  loading.style.display = "none";
                  location.href = "index.html";
              },  function(error) {
                  alert('Well this is embarrassing :( Sorry about that. Please contact me through social media instead.', error);
                  loading.style.display = "none";
                  location.href = "index.html";
              });
        }
    });
};
