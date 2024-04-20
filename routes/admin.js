const express = require("express");

const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
  createUser,
  getUser,
  updateUser,
  updateproduct,
  listproducts,
  getListOfUsers,
} = require("../controllers/admin");
const {
  checkIfAuthenticated,
  isAdmin,
} = require("../middlewares/authfirebase");
const { createproduct } = require("../controllers/admin");

// User profile route
router.post(
  "/createUser",
  checkIfAuthenticated,
  isAdmin,
  upload.single("avatar"),
  createUser
);
router.get("/getuser", checkIfAuthenticated, getUser);

router.post(
  "/updateUser",
  checkIfAuthenticated,
  isAdmin,
  upload.single("avatar"),
  updateUser
);

router.get("/listproducts", checkIfAuthenticated, listproducts);

router.post(
  "/udpateproduct",
  checkIfAuthenticated,
  isAdmin,
  upload.single("avatar"),
  updateproduct
);
router.post(
  "/createproduct",
  checkIfAuthenticated,
  isAdmin,
  upload.single("avatar"),
  createproduct
);
router.get("/listusers", checkIfAuthenticated, isAdmin, getListOfUsers);

module.exports = router;
