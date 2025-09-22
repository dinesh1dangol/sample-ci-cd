// backend/test.js
const http = require("http");
const app = require("./index");

console.log("Running backend test...");

const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Test server started on port ${PORT}`);

  http.get(`http://localhost:${PORT}`, (res) => {
    if (res.statusCode === 200) {
      console.log("✅ Backend server responded OK");
      server.close(() => process.exit(0));
    } else {
      console.error("❌ Backend server failed");
      server.close(() => process.exit(1));
    }
  }).on("error", (err) => {
    console.error("❌ Error:", err.message);
    server.close(() => process.exit(1));
  });
});

