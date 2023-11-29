const mockApi = {
  events: [],

  createEvent: function (eventData) {
    return new Promise((resolve, reject) => {
      // Simulate API call latency
      setTimeout(() => {
        this.events.push(eventData);
        resolve();
      }, 500);
    });
  },

  getEvents: function () {
    return new Promise((resolve) => {
      // Simulate API call latency
      setTimeout(() => {
        resolve([...this.events]);
      }, 500);
    });
  },
};

// Pre-populate with some dummy events
mockApi.events = [
  { name: "Meeting with Client", date: "2023-12-01T14:30" },
  { name: "Team Lunch", date: "2023-12-05T12:00" },
];
