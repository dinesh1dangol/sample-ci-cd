const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "Hello CI/CD!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

