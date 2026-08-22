const forms = document.querySelectorAll("[data-rfq-form]");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const lines = [];

    for (const [key, value] of formData.entries()) {
      if (value) lines.push(`${key}: ${value}`);
    }

    const subject = encodeURIComponent("Crystaring RFQ / Catalogue Request");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:sales@crystaring.com?subject=${subject}&body=${body}`;
  });
});

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
