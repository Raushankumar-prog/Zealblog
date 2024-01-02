import * as admin from 'firebase-admin';

const serviceAccount = require(process.env.FIREBASE_CREDENTIALS_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:  process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();

export { bucket };
