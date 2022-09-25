function handleNavBar(anchorId) {
  document.getElementsByClassName("selected")[0].classList.remove("selected");
  document.getElementById(anchorId).classList.add("selected");
}

function scrollSmoothTo(anchorId, elementId) {
  handleNavBar(anchorId);
  const element = document.getElementById(elementId);
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

addEventListener("scroll", (event) => {
  if (isInViewport(document.getElementById("introduction-section-scroll"))) {
    handleNavBar("introduction-href");
    return;
  }
  if (isInViewport(document.getElementById("about-me-section-scroll"))) {
    handleNavBar("about-me-href");
    return;
  }
  if (isInViewport(document.getElementById("skills-section-scroll"))) {
    handleNavBar("skills-href");
    return;
  }
  if (isInViewport(document.getElementById("connect-section-scroll"))) {
    handleNavBar("connect-href");
    return;
  }
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function sendMail(name, email, subject, message) {
  if (validFields()) {
    putEmailMessage("Sending...");
    const tempParams = {
      from_name: document.getElementById("connect_name").value,
      from_email: document.getElementById("connect_email").value,
      message: document.getElementById("connect_message").value,
      to_name: "Mateus Gasparotto (EmailJS API)",
    };

    emailjs
      .send("service_rpw1cmm", "template_z8o5e3t", tempParams)
      .then((res) => {
        if (res.status != 200) {
          putEmailMessage("Something went wrong sending the email...");
        } else {
          putEmailMessage("");
          console.log("PARAMS: " + tempParams + " HTTP STATUS: ", res.status);
        }
      });
  }
}

function validFields() {
  const from_name = document.getElementById("connect_name").value;
  const from_email = document.getElementById("connect_email").value;
  const message = document.getElementById("connect_message").value;
  return (
    validateName(from_name) &&
    validateEmail(from_email) &&
    validateMessage(message)
  );
}

function validateName(name) {
  if (name.trim().length > 0) {
    return true;
  }
  putEmailMessage("The name is not valid!");
  document.getElementById("connect_name").focus();
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  putEmailMessage("The email is not valid!");
  document.getElementById("connect_email").focus();
}

function validateMessage(message) {
  if (message.trim().length > 0) {
    return true;
  }
  putEmailMessage("The message is not valid!");
  document.getElementById("connect_message").focus();
}

function putEmailMessage(message) {
  const from_name = (document.getElementById("email_message").innerHTML =
    message);
}
