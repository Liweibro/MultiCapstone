import { useEffect, useState } from 'react';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPlp4TV4z7BZP7g--N_mjUMVhnhHqihyc",
  authDomain: "titanium-scope-316117.firebaseapp.com",
  databaseURL: "https://titanium-scope-316117-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "titanium-scope-316117",
  storageBucket: "titanium-scope-316117.appspot.com",
  messagingSenderId: "784497199765",
  appId: "1:784497199765:web:5dfd21c5c43ff1299d699c",
  measurementId: "G-JP3967E539"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
async function getorder(db) {
  const ordersCol = collection(db, 'order');
  const orderSnapshot = await getDocs(ordersCol);
  const orderList = orderSnapshot.docs.map(doc => doc.data());
  return orderList;
}
async function getres(db) {
    const resCol = collection(db, 'restaurant');
    const resSnapshot = await getDocs(resCol);
    
    const resList = resSnapshot.docs.map(doc => doc.data());
    
    return resList;
}
// let restaurant = []
// getres(db).then(result => restaurant = result )
// console.log(res)



function Homepage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getres(db).then(res => setData(res));
    }, []);
    console.log(data)
    return(
        <div>
            Homepage
            {data.map(d => <div key={d.name}>{d.name}</div>)}
        </div>
    );
}

export default Homepage;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCPlp4TV4z7BZP7g--N_mjUMVhnhHqihyc",
//   authDomain: "titanium-scope-316117.firebaseapp.com",
//   projectId: "titanium-scope-316117",
//   storageBucket: "titanium-scope-316117.appspot.com",
//   messagingSenderId: "784497199765",
//   appId: "1:784497199765:web:11836461a65ffc269d699c",
//   measurementId: "G-3C4CH8JZR8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);