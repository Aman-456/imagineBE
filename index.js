const express = require("express");
const cors = require("cors");
require("./config");

const app = express();

// Enable CORS
app.use(cors({ origin: "*" }));
app.use(express.json());

// Define your routes here
app.use((req, res, next) => {
  console.log(req.ipInfo, req.ip);
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use("/api/", require("./routes/users"));
app.use("/api/admin", require("./routes/admin"));

// render react build as static part
app.use(express.static("client/dist"));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html");
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
