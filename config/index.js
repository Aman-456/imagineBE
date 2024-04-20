const fs = require("fs");
const firebase = require("firebase-admin");
const dotenv = require("dotenv");
// dotenv.config({ path: ".env" });
dotenv.config();

const pkey = process.env.PRIVATE_KEY;

console.log("load config from dev file");

const config = {
  firebase_service_account: {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: fs.readFileSync(pkey, "utf8"),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN,
  },
};

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    credential: firebase.credential.cert(config["firebase_service_account"]),
    storageBucket: process.env.STORAGE_BUCKET,
  });
  console.log("account loaded");
} else {
  firebase.app(); // if already initialized, use that one
}

module.exports = config;
