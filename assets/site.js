const forms = document.querySelectorAll("[data-rfq-form]");
const mobileMenuButton = document.querySelector(".mobile-menu-toggle");
const siteNav = document.querySelector(".nav");

if (mobileMenuButton && siteNav) {
  const setMenuState = (isOpen) => {
    siteNav.classList.toggle("nav-open", isOpen);
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
    mobileMenuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  };

  mobileMenuButton.addEventListener("click", () => {
    setMenuState(!siteNav.classList.contains("nav-open"));
  });

  siteNav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    const submitButton = form.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
    }
  });
});

if (new URLSearchParams(window.location.search).get("submitted") === "1") {
  const message = document.querySelector("[data-form-success]");
  if (message) {
    message.hidden = false;
  }
}

document.querySelectorAll(".gallery-shell").forEach((shell) => {
  const gallery = shell.querySelector("[data-gallery], [data-factory-gallery]");
  if (!gallery) return;

  const scrollGallery = (direction) => {
    const firstItem = gallery.querySelector("figure");
    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 18;
    const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : 520;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth - 8;

    if (direction > 0 && gallery.scrollLeft >= maxScroll) {
      gallery.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && gallery.scrollLeft <= 0) {
      gallery.scrollTo({ left: gallery.scrollWidth, behavior: "smooth" });
      return;
    }

    gallery.scrollBy({
      left: direction * (itemWidth + gap),
      behavior: "smooth",
    });
  };

  shell.querySelector("[data-gallery-prev]")?.addEventListener("click", () => scrollGallery(-1));
  shell.querySelector("[data-gallery-next]")?.addEventListener("click", () => scrollGallery(1));

  if (gallery.hasAttribute("data-auto-gallery")) {
    let timer = window.setInterval(() => scrollGallery(1), 1000);
    shell.addEventListener("mouseenter", () => window.clearInterval(timer));
    shell.addEventListener("mouseleave", () => {
      timer = window.setInterval(() => scrollGallery(1), 1000);
    });
  }
});
