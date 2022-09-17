ScrollReveal().reveal("#about-me");
ScrollReveal().reveal("#skills");
ScrollReveal().reveal("article", { interval: 300, reset: true });

const handleNavBar = (anchorId) => {
  document.getElementsByClassName("selected")[0].classList.remove("selected");
  document.getElementById(anchorId).classList.add("selected");
};

const scrollSmoothTo = (anchorId, elementId) => {
  handleNavBar(anchorId);
  const element = document.getElementById(elementId);
  element.scrollIntoView({ block: "start", behavior: "smooth" });
};

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
  const tempParams = {
    from_name: document.getElementById("connect_name").value,
    from_email: document.getElementById("connect_email").value,
    message: document.getElementById("connect_message").value,
    to_name: "Mateus Gasparotto (EmailJS API)",
  };

  emailjs
    .send("service_rpw1cmm", "template_z8o5e3t", tempParams)
    .then((res) => {
      console.log("PARAMS: " + tempParams + " HTTP STATUS: ", res.status);
    });
}
