function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("active");
}
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const links = document.querySelector(".nav-links");
    links.classList.remove("active");
  });
});
