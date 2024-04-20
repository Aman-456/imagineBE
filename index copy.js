const express = require("express");
const cors = require("cors");
require("./config");
const ip = require("express-ip");

const app = express();

// Enable CORS
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(ip().getIpInfoMiddleware);

// Define your routes here
app.use((req, res, next) => {
  console.log(req.ipInfo, req.ip);
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/", require("./routes/users"));
app.use("/api/admin", require("./routes/admin"));

// test
app.get("/callback", (req, res) => {
  // Handle the callback from Latipay
  console.log("Payment successful");
  res.send("Payment successful");
});

app.post("/notify", (req, res) => {
  // Handle the notification from Latipay
  console.log("Payment notification received", req.body);
  res.sendStatus(200);
});
app.post("/cancel", (req, res) => {
  // Handle the notification from Latipay
  console.log("Payment notification cancel", req.body);
  res.sendStatus(200);
});

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
