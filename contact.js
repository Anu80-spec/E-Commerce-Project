document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        document.getElementById('formMessage').innerText = "Please fill in all fields.";
        document.getElementById('formMessage').style.color = "red";
        return;
    }

    document.getElementById('formMessage').innerText = "Thank you! Your message has been sent.";
    document.getElementById('formMessage').style.color = "green";

    // Clear form
    document.getElementById('contactForm').reset();
});
