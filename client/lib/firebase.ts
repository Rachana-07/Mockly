import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

console.log("API KEY:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
if(!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  throw new Error("Missing Firebase API key in .env.local");
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "mockly-ai-07.firebaseapp.com",
  projectId: "mockly-ai-07",
  storageBucket: "mockly-ai-07.firebasestorage.app",
  messagingSenderId: "451374197617",
  appId: "1:451374197617:web:bc0c5963652a95f28d24d0",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app

