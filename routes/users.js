const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { createUser, getUser, updateUser } = require("../controllers/users");
const { checkIfAuthenticated } = require("../middlewares/authfirebase");

// User profile route
router.post("/createUser", upload.single("avatar"), createUser);
router.get("/getuser", checkIfAuthenticated, getUser);
router.post(
  "/updateUser",
  checkIfAuthenticated,
  upload.single("avatar"),
  updateUser
);

module.exports = router;
