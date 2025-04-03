const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend access

const appointments = {
  "Monday": {
    "9:00 AM": { name: "Adam", booked: true, service: "Consultation" },
    "10:00 AM": { name: "", booked: false, service: "" },
    "11:00 AM": { name: "Micheal", booked: true, service: "Consultation" },
    "12:00 PM": { name: "", booked: false, service: "" },
    "1:00 PM": { name: "", booked: false, service: "" },
    "2:00 PM": { name: "Hurara", booked: true, service: "Follow-up" },
    "3:00 PM": { name: "", booked: false, service: "" },
    "4:00 PM": { name: "", booked: false, service: "" },
    "5:00 PM": { name: "", booked: false, service: "" },
    "6:00 PM": { name: "Ahsan", booked: true, service: "Consultation" }
  },
  "Tuesday": {
    "9:00 AM": { name: "", booked: false, service: "" },
    "10:00 AM": { name: "Uzma", booked: true, service: "Consultation" },
    "11:00 AM": { name: "", booked: false, service: "" },
    "12:00 PM": { name: "", booked: false, service: "" },
    "1:00 PM": { name: "Mahesh", booked: true, service: "Follow-up" },
    "2:00 PM": { name: "", booked: false, service: "" },
    "3:00 PM": { name: "", booked: false, service: "" },
    "4:00 PM": { name: "", booked: false, service: "" },
    "5:00 PM": { name: "", booked: false, service: "" },
    "6:00 PM": { name: "", booked: false, service: "" }
  },
  "Wednesday": {
    "9:00 AM": { name: "", booked: false, service: "" },
    "10:00 AM": { name: "", booked: false, service: "" },
    "11:00 AM": { name: "Sab", booked: true, service: "Consultation" },
    "12:00 PM": { name: "", booked: false, service: "" },
    "1:00 PM": { name: "", booked: false, service: "" },
    "2:00 PM": { name: "Nike", booked: true, service: "Consultation" },
    "3:00 PM": { name: "", booked: false, service: "" },
    "4:00 PM": { name: "Chris", booked: true, service: "Follow-up" },
    "5:00 PM": { name: "", booked: false, service: "" },
    "6:00 PM": { name: "", booked: false, service: "" }
  },
  "Thursday": {
    "9:00 AM": { name: "", booked: false, service: "" },
    "10:00 AM": { name: "", booked: false, service: "" },
    "11:00 AM": { name: "", booked: false, service: "" },
    "12:00 PM": { name: "", booked: false, service: "" },
    "1:00 PM": { name: "", booked: false, service: "" },
    "2:00 PM": { name: "", booked: false, service: "" },
    "3:00 PM": { name: "", booked: false, service: "" },
    "4:00 PM": { name: "", booked: false, service: "" },
    "5:00 PM": { name: "", booked: false, service: "" },
    "6:00 PM": { name: "", booked: false, service: "" }
  },
  "Friday": {
    "9:00 AM": { name: "", booked: false, service: "" },
    "10:00 AM": { name: "", booked: false, service: "" },
    "11:00 AM": { name: "", booked: false, service: "" },
    "12:00 PM": { name: "", booked: false, service: "" },
    "1:00 PM": { name: "", booked: false, service: "" },
    "2:00 PM": { name: "", booked: false, service: "" },
    "3:00 PM": { name: "", booked: false, service: "" },
    "4:00 PM": { name: "", booked: false, service: "" },
    "5:00 PM": { name: "", booked: false, service: "" },
    "6:00 PM": { name: "", booked: false, service: "" }
  },
  "Saturday": {
    "9:00 AM": { name: "", booked: false, service: "" },
    "10:00 AM": { name: "", booked: false, service: "" },
    "11:00 AM": { name: "", booked: false, service: "" },
    "12:00 PM": { name: "", booked: false, service: "" },
    "1:00 PM": { name: "", booked: false, service: "" },
    "2:00 PM": { name: "", booked: false, service: "" },
    "3:00 PM": { name: "", booked: false, service: "" },
    "4:00 PM": { name: "", booked: false, service: "" },
    "5:00 PM": { name: "", booked: false, service: "" },
    "6:00 PM": { name: "", booked: false, service: "" }
  }
};


app.get("/api/appointments", (req, res) => {
  res.json(appointments);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
