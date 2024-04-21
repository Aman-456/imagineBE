import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config";
import {
  confirmPasswordReset,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class FireBaseService {
  constructor() {
    this.unsubscribe = null;
  }

  detachUserDocumentListener() {
    if (this.unsubscribe) {
      this?.unsubscribe();
      this.unsubscribe = null;
    }
  }

  attachUserDocumentListener(collection, callback) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // this.unsubscribe = this.attachUserDocumentListener(user.uid);
        const docRef = doc(db, collection, user.uid);
        this.unsubscribe = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            callback({ ...doc.data(), id: doc.id });
          } else {
            console.log("No such document!");
          }
        });
      } else {
        // Remove listener
        callback(null);
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      }
    });
  }

  // Login method
  async login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }

  // Forgot Password method
  async forgotPassword(email) {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully");
  }

  // Reset Password method
  async resetPassword(oobCode, newPassword) {
    await confirmPasswordReset(auth, oobCode, newPassword);
    console.log("Password has been reset successfully");
  }
  async logout() {
    await signOut(auth);
    window.refresh();
    console.log("Signout successfully");
  }
}

export default new FireBaseService();
export const FirebaseService = new FireBaseService();
