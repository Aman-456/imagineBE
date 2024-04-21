const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
  createUser,
  getUser,
  updateUser,
  authenticateUser,
  getListOfUsers,
} = require("../controllers/admin");
const {
  checkIfAuthenticated,
  isAdmin,
} = require("../middlewares/authfirebase");

// User profile route
router.post(
  "/createUser",
  // checkIfAuthenticated,
  // isAdmin,
  upload.single("avatar"),
  createUser
);
router.get("/getuser", checkIfAuthenticated, getUser);
router.post("/signin", authenticateUser);

router.post(
  "/updateUser",
  checkIfAuthenticated,
  isAdmin,
  upload.single("avatar"),
  updateUser
);

router.get("/listusers", checkIfAuthenticated, isAdmin, getListOfUsers);

module.exports = router;
