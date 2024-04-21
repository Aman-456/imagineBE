const admin = require("firebase-admin");

class FirestoreProvider {
  constructor() {
    console.log("INIT FIRESTORE PROVIDER");
    if (!admin.apps.length)
      throw new Error("firebase app is not initizialized");
    this.fireStoreDb = admin.firestore();
    this.auth = admin.auth();
    this.storage = admin.storage();
  }

  async updateDoc(entity) {
    const document = this.fireStoreDb
      .collection(entity.collection)
      .doc(entity.id);
    await document.update(entity.data);
  }

  async addDocWithId(entity) {
    return await this.fireStoreDb
      .collection(entity.collection)
      .doc(entity.id)
      .set(entity.data);
  }
  async addDoc(entity) {
    return await this.fireStoreDb
      .collection(entity.collection)
      .add(entity.data);
  }

  createUser({ email, password }) {
    return this.auth.createUser({ email, password });
  }

  getBucket() {
    return this.storage.bucket();
  }

  async updateWithTransaction(entity, updates) {
    await this.fireStoreDb.runTransaction(async (transaction) => {
      const documentRef = this.fireStoreDb
        .collection(entity.collection)
        .doc(entity.id);
      const document = await transaction.get(documentRef);
      if (!document.exists) {
        throw new Error("Documento non trovato.");
      }
      transaction.update(documentRef, updates);
    });
  }

  async getFromClass(ctor, id) {
    const collectionName = ctor.name;
    const documentRef = this.fireStoreDb.collection(collectionName).doc(id);
    const document = await documentRef.get();
    if (!document.exists) return null;
    const entity = document.data();
    entity.id = document.id;
    return entity;
  }

  async get(id, collection_name) {
    const documentRef = this.fireStoreDb.collection(collection_name).doc(id);
    const document = await documentRef.get();
    if (!document.exists) return null;
    const entity = document.data();
    entity.id = document.id;
    return entity;
  }

  async getAll(collection_name) {
    const collectionRef = this.fireStoreDb.collection(collection_name);
    const snapshot = await collectionRef.get();
    return snapshot.docs.map((doc) => {
      const entity = doc.data();
      entity.id = doc.id;
      entity.createAt = doc.createTime;
      entity.updatedAt = doc.updateTime;
      return entity;
    });
  }

  async whereEqualTo(fieldPath, value, collection_name) {
    const querySnapshot = await this.fireStoreDb
      .collection(collection_name)
      .where(fieldPath, "==", value)
      .get();
    return querySnapshot.docs.map((doc) => {
      const entity = doc.data();
      entity.id = doc.id;
      return entity;
    });
  }

  async whereMultipleConditions(conditions, collection_name) {
    let collectionRef = this.fireStoreDb.collection(collection_name);

    conditions.forEach((condition) => {
      collectionRef = collectionRef.where(
        condition.fieldPath,
        condition.opStr,
        condition.value
      );
    });

    const querySnapshot = await collectionRef.get();
    return querySnapshot.docs.map((doc) => {
      const entity = doc.data();
      entity.id = doc.id;
      return entity;
    });
  }
  async verifyIdToken(authToken) {
    const userInfo = await this.auth.verifyIdToken(authToken);
    return userInfo;
  }

  async signInWithEmailAndPassword(email, password) {
    const userRecord = await this.auth.getUserByEmail(email);
    if (!userRecord) {
      throw new Error("No user record found for the provided email.");
    }
    const checkPassword = await this.auth.verifyPassword(
      userRecord.uid,
      password
    );
    if (!checkPassword) {
      throw new Error("Password is incorrect.");
    }

    return userRecord;
  }
  getUserByEmail(email) {
    return this.auth.getUserByEmail(email);
  }
}

const instance = new FirestoreProvider();

module.exports = instance;
