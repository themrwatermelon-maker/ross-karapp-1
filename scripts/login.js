import { authenticate } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    if (authenticate(password)) {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("host-dashboard").style.display = "block";
    } else {
      alert("Incorrect password");
    }
  });
});
