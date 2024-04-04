const mongoose = require("mongoose");

mongoose
  .connect(process.env.db)
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
