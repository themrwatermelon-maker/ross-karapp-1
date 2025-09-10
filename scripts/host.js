document.addEventListener("DOMContentLoaded", () => {
  const eventSelect = document.getElementById("host-event-select");
  const queue = document.getElementById("singer-queue");

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
    queue.innerHTML = "<li>Loading queue...</li>";
    // Future: load queue data
  });

  document.getElementById("create-event").addEventListener("click", () => {
    const name = prompt("Event name:");
    if (name) {
      alert("Event creation pending backend — coming soon!");
    }
  });
});
