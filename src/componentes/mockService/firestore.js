// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'
import products from "../data/data"
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

  const documentsnapshot = await getDocs(query)

   const documentsData = documentsnapshot.docs.map((doc)=>{
    let docdatawithid = doc.data()

    docdatawithid.id = doc.id

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
 async function exportDataToFirestore(){
  const products = [    {id: 1, title: "Almendras peladas x 1kg", descripcion:"Almendra pelada que puede variar su textura, sabor, color y tamaño, generalmente es de piel aspera y rugosa y de sabor agradable", price: 500, img:"https://www.pequerecetas.com/wp-content/uploads/2010/11/propiedades-de-las-almendras-660x441.jpg.webp", stock:22, category: "frutosSecos"},
{id: 3, title: "Castañas de caju x 1kg", descripcion:"Castañas de caju crudas enteras, x 1kg", price: 400, img:"https://cdnx.jumpseller.com/pargua-gourmet/image/17582671/blog-caju.jpg.jpg?1625703244", stock:22, category: "frutosSecos"},
{id: 4, title: "Pasta de mani artesanal", descripcion:"Pasta de maní artesanal sin agregado de azúcar, no tiene sodio. Contiene certificación Kosher.", price: 350, img:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FMEHAHM6ZZBIHK2OH5EPVHJQIE.jpg", stock:22, category: "untables"},
{id: 5, title: "Harina de almendras x 250g", descripcion:"Harina de almendras sin piel", price: 675, img:"https://www.hogarmania.com/archivos/202101/harina-de-almendras-beneficios-y-como-se-hace-668x400x80xX-1.jpg", stock:22, category: "harinas"},
{id: 6, title: "Harina de  coco", descripcion:"La harina de coco (100% coco en polvo) se obtiene a partir del secado y molido de su pulpa. Tiene una textura similar a otras harinas pero con la cualidad de ser muy absorbente. Contiene una importante cantidad de fibra, y baja en carbohidratos y grasa. Producto non GMO. Apto Kosher", price: 553, img:"https://http2.mlstatic.com/D_NQ_NP_977101-MLA41560217027_042020-O.jpg", category: "harinas"},
{id: 7, title: "Harina de algarroba", descripcion:"La harina de algarroba es el sustituto ideal del cacao porque es sana y alimenticia, y por su color y sabor muy similar.", price: 551, img:"https://www.recetasingluten.com/wp-content/uploads/2021/11/harina-de-algarroba-1-1024x683.png", stock:22, category: "harinas"},
{id:8, title:"Semillas de zapallo pelada", descripcion:"Semilla de zapallo pelada, sin tostar", price: 200, img:"https://i.blogs.es/a30817/pipas2/840_560.jpg", stock:22, category:"semillas"},
{id:9, title:"Semillas de sesamo blanco", descripcion:"semillas de sesamo blanco x250gr", price: 360, img:"https://cdnx.jumpseller.com/espesales/image/9534282/resize/480/480?1661180543", stock:22, category:"semillas"},
{id:10, title:"Semillas de lino", price: 402, img:"https://www.mentta.com/blog/wp-content/uploads/2022/02/semillas-de-lino-kan-1200x630@abc-768x403.jpg", stock:22, category:"semillas"},
{id: 19, title: "Mani Japones", price: 251,img:"https://saboresandinos.com/wp-content/uploads/2021/07/460-Mani-Japones-crocante-2-cuadrada.jpg", stock:22,  category: "frutosSecos"},
{id: 23, title: "Mermelada de arandones 'Beepure'", price: 470,img:"https://www.almacencamposverdes.com.ar/wp-content/uploads/2019/04/mermelada.png", stock:22,  category: "untables"},
{id: 94, title: "Bebida de  coco", price: 753,img:"https://s.yimg.com/ny/api/res/1.2/hnQAvJpIzD3pAmWUwvdq6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/uu/api/res/1.2/WEKDp170gxM_hsSerpPm8w--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/e6444ee38e59ec23773e6684ad93178f", stock:22,  category: "bebidas"},
{id: 89, title: "Pan de masa madre", price: 858, img:"https://www.recetasderechupete.com/wp-content/uploads/2020/05/Pan-casero-pueblo-1.jpg",stock:22, category: "pan"},
{id:33, title:"Bayas de goji", price: 372, img:"https://t1.uc.ltmcdn.com/es/posts/7/7/8/como_hacer_una_infusion_de_bayas_de_goji_33877_paso_1_600.jpg", stock:22, category:"china"},
{id:27, title:"Pan Integral con semillas", price: 351,img:"https://mandolina.co/wp-content/uploads/2020/11/Caseras-Pan.jpg.webp", stock:22,  category:"pan"},
{id:93, title:"Pan de avena", price: 359,img:"https://okdiario.com/img/2017/04/08/pan-de-avena-al-horno_-una-receta-saludable-para-desayunar-1-655x368.jpg", stock:22,  category:"pan"}
]
  const collectionRef = collection(DB, 'products')
  for (let product of products){
    delete(product.id)
    let docProduct = await addDoc(collectionRef, product)
  }
}