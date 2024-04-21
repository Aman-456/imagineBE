const firebaseService = require("../services/firebase");
const {
  uploadBufferToStorage,
} = require("../middlewares/uploadBufferToStorage");

// creating account Admin
exports.createUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username || !req.file) {
      return res
        .status(400)
        .json({ error: "Email, password, username and avatar are required." });
    }

    const [userExists, usersWithSameUsername] = await Promise.all([
      firebaseService.getUserByEmail(email).catch((err) => err),
      firebaseService.whereEqualTo("username", username, "admins"),
    ]);

    if (userExists && !(userExists instanceof Error)) {
      return res.status(400).json({ error: "Admin already exists." });
    }

    if (usersWithSameUsername.length > 0) {
      return res.status(400).json({ error: "Admin already taken." });
    }

    const userRecord = await firebaseService.createUser({ email, password });

    let avatarUrl = null;
    if (req.file) {
      avatarUrl = await uploadBufferToStorage(req.file.buffer, "admins");
    }
    await firebaseService.addDocWithId({
      data: {
        username,
        email: email,
        avatar: avatarUrl,
      },
      collection: "admin",
      id: userRecord.uid,
    });
    return res.status(201).json({ message: "Admin created successfully." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "An error occurred while creating the user.",
      error: error.message,
    });
  }
};

// getUser
exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await firebaseService.get(id, "admins");
    if (!user) {
      return res.status(404).json({ message: "Admin not found." });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "An error occurred while getting the admin.",
      error: error.message,
    });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.query;
    const updates = req.body;

    delete updates.email;
    delete updates.username;

    // Handle the uploaded file
    if (req.file) {
      const avatarUrl = await uploadBufferToStorage(req.file.buffer);
      updates.avatar = avatarUrl;
    }

    const user = await firebaseService.get(id, "admins");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update the user document
    await firebaseService.updateWithTransaction(
      { id, collection: "admins" },
      updates
    );

    // Get the updated user document
    const updatedUser = await firebaseService.get(id, "admins");

    res.json(updatedUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "An error occurred while updating the admin.",
      error: error.message,
    });
  }
};

// getListOfUsers
exports.listproducts = async (req, res) => {
  try {
    const products = await firebaseService.getAll("products");
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "An error occurred while getting the list of products.",
      error: error.message,
    });
  }
};

// users
exports.getListOfUsers = async (req, res) => {
  try {
    const users = await firebaseService.getAll("users");
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "An error occurred while getting the list of users.",
      error: error.message,
    });
  }
};

exports.authenticateUser = async (req, res) => {
  try {
    const { idToken } = req.body;
    const userRecord = await firebaseService.verifyIdToken(idToken);
    const user = await firebaseService.get(userRecord.uid, "users");
    return res.status(200).json({ ...user, idToken, isAdmin: true });
  } catch (error) {
    console.error(error.message, "here");
    res.status(500).json({
      message: "An error occurred while authenticating the user.",
      error: error.message,
    });
  }
};
