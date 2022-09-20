import { initializeApp } from 'firebase/app'
import { getFirestore, enableIndexedDbPersistence, collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6HV8m8cu8hAGpJY8akHlkSYu_g4EukA8",
  authDomain: "coffee-22df3.firebaseapp.com",
  projectId: "coffee-22df3",
  storageBucket: "coffee-22df3.appspot.com",
  messagingSenderId: "91563109051",
  appId: "1:91563109051:web:3196c34c187086040dd79e"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

enableIndexedDbPersistence(db).catch(e => console.error(e))

// add document
export const addDocument = async (database: string, data: object) => {
  try {
    const docRef = await addDoc(collection(db, database), data)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

// get collection
export const getCollection = async (database: string) => {
  const querySnapshot = await getDocs(collection(db, database))
  const array: any[] = []
  querySnapshot.forEach(doc => {
    array.push({ id: doc.id, ...doc.data() })
  })
  return array
}

// get last cash amount
export const getCashAmount = async () => {
  let data
  const shifts = await collection(db, 'shifts')
  const snapshot = await query(shifts, orderBy('created', 'desc'), limit(1))
  const querySnapshot = await getDocs(snapshot)
  querySnapshot.forEach(doc => {
    data = doc.data()
  })
  return data
}
