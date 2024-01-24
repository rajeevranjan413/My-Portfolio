/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //serviceId, templateId, #form, publicKey
  emailjs
    .sendForm(
      "service_yqsbvwk",
      "template_6v7l0f9",
      "#contact-form",
      "UkICQy4l8D3WksnXj"
    )
    .then(() => {
      //show successfull sent
      contactMessage.textContent = "Message Sent Successfully";

      //Remove alert after five sec

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      //Clear all input fields
      contactForm.reset();
    })
    .catch(() => {
      contactMessage.textContent =
        "Message not Sent Successfully(services error)";
    });
};

contactForm.addEventListener("submit", sendEmail);
