ScrollReveal({ reset: true });
ScrollReveal().reveal("#introduction", { delay: 150 });
ScrollReveal().reveal("#about-me");
ScrollReveal().reveal("#skills");
ScrollReveal().reveal("article", { delay: 300, interval: 350 });

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
