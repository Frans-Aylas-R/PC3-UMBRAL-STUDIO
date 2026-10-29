"use strict";

const loader = document.querySelector("#page-loader");
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");
const currentYear = document.querySelector("#current-year");

function hideLoader() {
  if (loader) {
    loader.classList.add("is-hidden");
    loader.setAttribute("aria-hidden", "true");
  }
}

if (document.readyState === "complete") {
  hideLoader();
} else {
  window.addEventListener("load", hideLoader, { once: true });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (contactForm instanceof HTMLFormElement && feedback instanceof HTMLElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.classList.add("was-validated");

    if (!contactForm.checkValidity()) {
      const firstInvalidField = contactForm.querySelector(":invalid");
      if (firstInvalidField instanceof HTMLElement) {
        firstInvalidField.focus();
      }
      feedback.classList.add("d-none");
      return;
    }

    feedback.textContent = "¡Gracias por compartir tu idea! Este formulario es una demostración y todavía no está conectado a un servidor.";
    feedback.classList.remove("d-none");
  });

  contactForm.addEventListener("reset", () => {
    contactForm.classList.remove("was-validated");
    feedback.classList.add("d-none");
    feedback.textContent = "";
  });
}

const navigation = document.querySelector("#main-navigation");
if (navigation instanceof HTMLElement) {
  navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 991.98px)").matches && window.bootstrap?.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(navigation).hide();
      }
    });
  });
}
