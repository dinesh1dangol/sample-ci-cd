// backend/index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello CI/CD!" });
});

// Only start server if run directly
if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

module.exports = app;

