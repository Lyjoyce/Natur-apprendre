// Newsletter
const newsletterForm = document.querySelector("#newsletter form");
const emailInput = document.querySelector("#email");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (emailInput.value === "") {
    alert("Veuillez saisir une adresse email.");
  } else {
    alert("Merci pour votre inscription !");
    newsletterForm.reset();
  }
});

// Formulaire de contact
const contactForm = document.querySelector("#contact form");
const contactEmail = document.querySelector("#contact-email");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (contactEmail.value === "") {
    alert("L’email est obligatoire pour vous répondre.");
  } else {
    alert("Votre message a bien été envoyé.");
    contactForm.reset();
  }
});
