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
