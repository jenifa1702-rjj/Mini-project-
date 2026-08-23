const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "IT Help Desk Backend is running successfully"
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend API is working"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
