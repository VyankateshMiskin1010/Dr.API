// index.js
const express = require("express");
const app = express();

const doctors = [
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  { name: "Dr. Smith", expertise: "Physiotherapist", city: "DefaultCity" },
  { name: "Dr. Johnson", expertise: "Orthopedic Surgeon", city: "DefaultCity" },
  // Add more doctors as needed
];

app.get("/api/doctors", (req, res) => {
  const city = req.query.city || "DefaultCity";
  const filteredDoctors = doctors.filter((doctor) => doctor.city === city);
  res.json(filteredDoctors);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
