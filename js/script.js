// script.js

// Function to navigate to the home page when the logo is clicked
function goToHomePage() {
    window.location.href = 'index.html';
}

function submitForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form elements
    var form = document.getElementById('inquiryForm');
    var confirmationMessage = document.getElementById('confirmationMessage');

    // Validate the form (you can add more validation as needed)
    var name = form.elements['name'].value;
    var mobile = form.elements['mobile'].value;
    var question = form.elements['question'].value;

    if (!name || !mobile || !question) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Display the confirmation message
    form.style.display = 'none';
    confirmationMessage.style.display = 'block';
}