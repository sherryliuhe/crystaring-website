const forms = document.querySelectorAll("[data-rfq-form]");
const mobileMenuButton = document.querySelector(".mobile-menu-toggle");
const siteNav = document.querySelector(".nav");
const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const updateHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

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
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector("button[type='submit']");
    const successMessage = form.querySelector("[data-form-success]");
    const errorMessage = form.querySelector("[data-form-error]");
    const originalButtonText = submitButton?.dataset.originalText || submitButton?.textContent || "Submit";

    if (submitButton) {
      submitButton.dataset.originalText = originalButtonText;
    }

    if (successMessage) {
      successMessage.hidden = true;
    }

    if (errorMessage) {
      errorMessage.hidden = true;
    }

    if (submitButton) {
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
    }

    try {
      await fetch(form.action, {
        method: form.method || "POST",
        body: new FormData(form),
        mode: "no-cors",
      });

      form.reset();

      if (successMessage) {
        successMessage.hidden = false;
        successMessage.focus?.();
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (submitButton) {
        submitButton.textContent = "Submitted";
      }
    } catch (error) {
      if (errorMessage) {
        errorMessage.hidden = false;
        errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (submitButton) {
        submitButton.textContent = originalButtonText;
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
});

if (new URLSearchParams(window.location.search).get("submitted") === "1") {
  const message = document.querySelector("[data-form-success]");
  if (message) {
    message.hidden = false;
  }
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll("main > section, .category-card, .product-family, .product-item, .process-grid > div, .process-list > div");
  document.documentElement.classList.add("reveal-ready");
  revealItems.forEach((item) => item.classList.add("reveal-item"));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  revealItems.forEach((item) => revealObserver.observe(item));
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
});
