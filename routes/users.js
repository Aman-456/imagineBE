const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
  signup,
  getUser,
  updateUser,
  authenticateUser,
  createpost,
  getMyPosts,
  getPosts,
} = require("../controllers/users");
const { checkIfAuthenticated } = require("../middlewares/authfirebase");

// User profile route
router.post("/signup", upload.single("avatar"), signup);
router.post("/signin", authenticateUser);
router.get("/getuser", checkIfAuthenticated, getUser);
router.post(
  "/createpost",
  checkIfAuthenticated,
  upload.single("file"),
  createpost
);
router.get("/getPosts", checkIfAuthenticated, getPosts);
router.get("/getMyPosts", checkIfAuthenticated, getMyPosts);
router.post(
  "/updateUser",
  checkIfAuthenticated,
  upload.single("avatar"),
  updateUser
);

module.exports = router;
