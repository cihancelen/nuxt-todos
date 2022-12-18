// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: .env dosyasına taşınacak.
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

const todosRef = collection(firestore, 'todos')

export async function addDummyTodos() {
  await addDoc(collection(firestore, '/todos'), { title: 'Firebase Express implementasyonuna bakılacak.', completed: false, dateTime: new Date('2022-12-18 13:23') })
  await addDoc(collection(firestore, '/todos'), { title: 'Firebase 9 sürümü araştırılacak.', completed: false, dateTime: new Date('2022-12-18 16:23') })
  await addDoc(collection(firestore, '/todos'), { title: 'AdonisJS backend framework konusu araştırılacak.', completed: false, dateTime: new Date('2022-12-18 3:23') })
}

export const todosSnap = getDocs(todosRef)
