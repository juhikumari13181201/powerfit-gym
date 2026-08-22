const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const plan = form.querySelector("select").value;
    const message = form.querySelector("textarea").value;

    const gymNumber = "919142536707";

    const whatsappMessage =
        "Hello PowerFit Gym!%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Email: " + email + "%0A" +
        "Membership: " + plan + "%0A" +
        "Message: " + message;

    const whatsappURL =
        "https://wa.me/" + gymNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

    form.reset();
});