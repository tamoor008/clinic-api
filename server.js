const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend access

const appointments = {
  "appointments": [
    {"time": "9:00 AM", "Monday": "Adam", "Tuesday": "", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "10:00 AM", "Monday": "", "Tuesday": "Uzma", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "11:00 AM", "Monday": "Micheal", "Tuesday": "", "Wednesday": "Sab", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "12:00 PM", "Monday": "", "Tuesday": "", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "1:00 PM", "Monday": "", "Tuesday": "Mahesh", "Wednesday": "", "Thursday": "", "Friday": "Chaudary", "Saturday": ""},
    {"time": "2:00 PM", "Monday": "Hurara", "Tuesday": "", "Wednesday": "Nike", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "3:00 PM", "Monday": "", "Tuesday": "", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "4:00 PM", "Monday": "", "Tuesday": "", "Wednesday": "Chris", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "5:00 PM", "Monday": "", "Tuesday": "", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": ""},
    {"time": "6:00 PM", "Monday": "Ahsan", "Tuesday": "", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": ""}
  ]
};

app.get("/api/appointments", (req, res) => {
  res.json(appointments);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
