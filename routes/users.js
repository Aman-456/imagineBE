const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
  signup,
  getUser,
  updateUser,
  authenticateUser,
} = require("../controllers/users");
const { checkIfAuthenticated } = require("../middlewares/authfirebase");

// User profile route
router.post("/signup", upload.single("avatar"), signup);
router.post("/signin", authenticateUser);
router.get("/getuser", checkIfAuthenticated, getUser);
router.post(
  "/updateUser",
  checkIfAuthenticated,
  upload.single("avatar"),
  updateUser
);

module.exports = router;
