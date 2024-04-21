const admin = require("firebase-admin");

exports.uploadBufferToStorage = async (buffer, directory = "users") => {
  const bucket = admin.storage().bucket();
  const fileName = `${directory}/${Date.now().toString()}`;
  const file = bucket.file(fileName);
  await file.save(buffer);

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
  return publicUrl;
};
