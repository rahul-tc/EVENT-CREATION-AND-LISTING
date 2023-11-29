document.addEventListener("DOMContentLoaded", function () {
  displayEventList();
});

function displayEventList() {
  const eventList = document.getElementById("eventList");
  const events = JSON.parse(localStorage.getItem("events")) || [];

  events.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${event.name} - ${event.date}`;
    eventList.appendChild(listItem);
  });
}
