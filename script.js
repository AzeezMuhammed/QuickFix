const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const authModal = document.getElementById("authModal");
const modalClose = document.getElementById("modalClose");
const loginBtn = document.getElementById("loginBtn");
const getStartedBtn = document.getElementById("getStartedBtn");
const heroStartBtn = document.getElementById("heroStartBtn");
const providerBtn = document.getElementById("providerBtn");
const viewAllBtn = document.getElementById("viewAllBtn");

const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const authForm = document.getElementById("authForm");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.quickFixToastTimer);

  window.quickFixToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function openAuth(mode = "signup") {
  if (mode === "login") {
    modalTitle.textContent = "Welcome back";
    modalSubtitle.textContent =
      "Log in to manage your bookings and services.";
  } else {
    modalTitle.textContent = "Get started";
    modalSubtitle.textContent =
      "Create an account to book trusted professionals.";
  }

  authModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAuth() {
  authModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Mobile menu
menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Close mobile menu after clicking a link
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

// Login
loginBtn.addEventListener("click", () => {
  openAuth("login");
});

// Get started
getStartedBtn.addEventListener("click", () => {
  openAuth("signup");
});

// Hero button
heroStartBtn.addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
});

// Become a provider
providerBtn.addEventListener("click", () => {
  showToast("Provider onboarding will be connected in the next part.");
});

// View all professionals
viewAllBtn.addEventListener("click", () => {
  showToast("All professionals will be available in the provider directory.");
});

// Close modal
modalClose.addEventListener("click", closeAuth);

// Close modal when clicking outside
authModal.addEventListener("click", (event) => {
  if (event.target === authModal) {
    closeAuth();
  }
});

// Auth form
authForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();

  const firstName = name
    ? name.split(" ")[0]
    : "there";

  closeAuth();

  authForm.reset();

  showToast(`Welcome, ${firstName}! Account demo submitted.`);
});

// Escape key closes modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAuth();
  }
});

// Service selection
document.querySelectorAll("[data-service]").forEach((element) => {
  element.addEventListener("click", () => {
    const service = element.dataset.service;

    showToast(
      `${service} selected. The service directory will open in the next part.`
    );
  });
});