document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("GKZCcaVZgZi8dI8QE"); // Initialize EmailJS with your user ID

    const internForm = document.getElementById('internForm');
    internForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            position: document.getElementById('position').value,
            package: document.getElementById('package').value,
            joiningDate: document.getElementById('joiningDate').value,
        };
        // Existing JavaScript code for sending emails...

// Example of form validation (simplified)
internForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate form data here...
    if (formData.email.indexOf('@') === -1) {
        alert('Please enter a valid email address.');
        return;
    }
    // Proceed with email sending...
});

// Example of dynamic feedback
emailjs.send('service_q04yqbm', 'template_mzfqguh', formData)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // Replace alert with a modal or toast notification for success
    }, function(error) {
        console.log('FAILED...', error);
        // Replace alert with a modal or toast notification for error
    });

        // Send the email
        emailjs.send('service_q04yqbm', 'template_mzfqguh', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Offer letter sent!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the offer letter. Please try again.');
            });
    });
});