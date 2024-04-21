const firebaseService = require("../services/firebase");

const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      console.log("check if is authenticated", authToken);
      if (authToken) {
        const userInfo = await firebaseService.verifyIdToken(authToken);
        req.authId = userInfo.uid;
        return next();
      }
    } catch (e) {
      console.log(e);
    }
    return res.status(401).send({ error: "Not authorized" });
  });
};

const isAdmin = async (req, res, next) => {
  const { authToken } = req;
  if (authToken) {
    const userInfo = await firebaseService.verifyIdToken(authToken);
    if (userInfo) {
      const admin = await firebaseService.get(userInfo.uid, "admins");
      if (!admin) {
        return res
          .status(401)
          .send({ error: "Not authorized. Admin not found" });
      }
      req.admin = true;
      return next();
    }
  }
  return res.status(401).send({ error: "Not  Admin" });
};

module.exports = {
  checkIfAuthenticated,
  isAdmin,
};
