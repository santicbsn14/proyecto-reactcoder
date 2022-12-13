// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjZbYayrntTJ1Tjo4BRIpvRxMTK4cFQwQ",
  authDomain: "react-lagrannuez.firebaseapp.com",
  projectId: "react-lagrannuez",
  storageBucket: "react-lagrannuez.appspot.com",
  messagingSenderId: "428200466388",
  appId: "1:428200466388:web:5b1f2308d3bc6b2c42a841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)
export default async function getitems(){
   const collectionProductsRef = collection(DB, 'products')
   const documentsnapshot = await getDocs(collectionProductsRef)
   const documentsData = documentsnapshot.docs.map((doc)=>{
    let docdatawithid = doc.data()
    docdatawithid.id = doc.id
    return docdatawithid
   })
   return documentsData
}
export async function getSingleItem(idparam){
  const docref = doc(DB,'products', idparam)
  const docsnapshot = await getDoc(docref)
  return {
    ...docsnapshot.data(),
    id: docsnapshot.id
  }
}
export async function getitemsByCategory(idCategory){
  const collectionref = collection(DB, 'products')

  const querycat = query(collectionref,where("category", "==", idCategory))

  const documentsnapshot = await getDocs(querycat)

   const documentsData = documentsnapshot.docs.map((doc)=>{
    let docdatawithid = doc.data()

    docdatawithid.id = doc.id
    return docdatawithid
   })
   return documentsData
  
}
export async function createOrder(order){
  const collectionOrdersRef = collection(DB,'orders')
  const addOrder = await addDoc(collectionOrdersRef,order)
  return (addOrder.id)
}
export async function getOrderItem(idparam){
  const docrefOrders = doc(DB,'orders', idparam)
  const docOrder = await getDoc(docrefOrders)
  return {
    ...docOrder.data(),
    id: docOrder.id
  }
}
