import { initializeApp, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

function createFirebaseApp(config) {
  try {
    return getApp()
  } catch {
    return initializeApp(config)
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp)
const STATE_CHANGED = 'state_changed'

if (process.env.NODE_ENV === 'development') {
  connectAuthEmulator(auth, 'http://localhost:9099')
  connectFirestoreEmulator(db, 'localhost', 8080)
}

export { auth, db, storage, STATE_CHANGED }
