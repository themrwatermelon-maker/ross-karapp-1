// scripts/login.js

import { authenticate } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;

    if (authenticate(password)) {
      window.location.href = "host.html";
    } else {
      alert("Incorrect password. Try again.");
    }
  });
});
