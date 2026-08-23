const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({
    message: "Register API working"
  });
});

router.post("/login", (req, res) => {
  res.json({
    message: "Login API working"
  });
});

module.exports = router;
