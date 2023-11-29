document
  .getElementById("eventForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const eventName = document.getElementById("eventName").value;
    const eventStartDate = document.getElementById("eventStartDate").value;
    const eventEndDate = document.getElementById("eventEndDate").value;

    // Mock API call to simulate event creation
    mockApi
      .createEvent({
        name: eventName,
        startDate: eventStartDate,
        endDate: eventEndDate,
      })
      .then(() => {
        alert("Event created successfully");
        // Redirect to the listing page (Step 3)
        window.location.href = "listing.html";
      })
      .catch((error) => {
        console.error("Error creating event:", error);
        alert("Error creating event. Please try again.");
      });
  });
