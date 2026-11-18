// Shared navigation exposes the menu state to assistive technology.
const menu = document.querySelector(".menu");
menu?.addEventListener("click", () => {
  const open = document.querySelector(".links").classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
document.querySelector("#contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target,
    n = f.elements.name,
    m = f.elements.message;
  n.setCustomValidity(
    n.value.trim().length < 2 ? "Enter at least two non-space characters." : "",
  );
  m.setCustomValidity(
    m.value.trim().length < 20
      ? "Please add a little more detail (20 characters)."
      : "",
  );
  if (!f.reportValidity()) return;
  document.querySelector("#feedback").textContent =
    "Your message is valid. This demo does not send messages.";
});
document
  .querySelectorAll("input,textarea")
  .forEach((x) => x.addEventListener("input", () => x.setCustomValidity("")));
