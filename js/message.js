// send message from header 'let's talk button
const senderM = document.getElementById('name-modal');
const emailM = document.getElementById('email-modal');
const messageM = document.getElementById('message-modal');
const loadingM = document.getElementById('loading-modal');

// Send email function from https://www.emailjs.com/
window.onload = function() {
    document.getElementById('form-modal').addEventListener('submit', function(event) {
        event.preventDefault();
        if (senderM.value === '' || emailM.value === '' || messageM.value === '') {
          alert('Please complete all fields before sending message.');
        } else {
            loadingM.style.display = "flex";
          // log in https://dashboard.emailjs.com to get service id and user id
            emailjs.sendForm('service_4dftmcc', 'contact_form', this)
              .then(function() {
                  alert('Sent! Thank you for the message, I will get back to you shortly.');
                  loadingM.style.display = "none";
                  location.href = "index.html";
              },  function(error) {
                  alert('Well this is embarrassing :( Sorry about that. Please contact me through social media instead.', error);
                  loadingM.style.display = "none";
                  location.href = "index.html";
              });
        }
    });
};
