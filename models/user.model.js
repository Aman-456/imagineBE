const mongoose = require("mongoose");
const connect = mongoose.connect(
  "mongodb+srv://ammadgeekshub:lkpaMLCDsruW78Qv@cluster0.3zpk1hh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
connect
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });
const UsersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("user", UsersSchema);
module.exports = collection;
