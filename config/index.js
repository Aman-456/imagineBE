const firebase = require("firebase-admin");
const dotenv = require("dotenv");
// dotenv.config({ path: ".env" });
dotenv.config();

console.log("load config from dev file");

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    credential: firebase.credential.cert(require("../pkey.json")),
    storageBucket: process.env.STORAGE_BUCKET,
  });
  console.log("account loaded");
} else {
  firebase.app(); // if already initialized, use that one
}

// module.exports = config;
