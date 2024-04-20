const admin = require("firebase-admin");

exports.uploadBufferToStorage = async (
  buffer,
  directory = "users",
  makePublic = true
) => {
  const bucket = admin.storage().bucket();
  const fileName = `${directory}/${Date.now().toString()}`;
  const file = bucket.file(fileName);
  await file.save(buffer);

  if (makePublic) {
    await file.makePublic();
  }

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
  return publicUrl;
};
