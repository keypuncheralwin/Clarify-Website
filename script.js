document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Show spinner
    const submitButton = event.target.querySelector('button[type="submit"]');
    const spinner = submitButton.querySelector('.spinner');
    const buttonText = submitButton.querySelector('.button-text');

    buttonText.style.display = "none";
    spinner.style.display = "block";

    const formData = {
        name: event.target.querySelector('input[name="name"]').value,
        email: event.target.querySelector('input[name="email"]').value
    };

    fetch(event.target.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        spinner.style.display = "none";
        buttonText.style.display = "block";
        if (data.success) {
            document.getElementById("subscribeForm").style.display = "none";
            const thankYouCard = document.getElementById("thankYouCard");
            thankYouCard.style.opacity = 0;
            thankYouCard.style.display = 'block';
            setTimeout(() => {
                thankYouCard.style.opacity = 1;
            }, 10);
            showToast("Subscription successful!");
        } else if (data.message === "Email is already subscribed") {
            showToast("You're already subscribed to Clarify!");
        } else {
            showToast("Subscription failed. Please try again.");
        }
    })
    .catch(error => {
        spinner.style.display = "none";
        buttonText.style.display = "block";
        showToast("An error occurred. Please try again.");
    });
});

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}
