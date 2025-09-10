document.addEventListener("DOMContentLoaded", () => {
  const eventSelect = document.getElementById("event-select");
  const form = document.getElementById("request-form");

  fetch("data/data.json")
    .then((res) => res.json())
    .then((data) => {
      for (let eventName in data.events) {
        const opt = document.createElement("option");
        opt.value = eventName;
        opt.textContent = eventName;
        eventSelect.appendChild(opt);
      }
    });

  eventSelect.addEventListener("change", () => {
    if (eventSelect.value !== "") {
      form.style.display = "block";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Song submitted (functionality pending backend)!");
    form.reset();
  });
});
