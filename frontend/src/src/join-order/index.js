import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Fliter from "./components/Fliter";
import Item from "./components/Item";
import "./index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import BackButton from "./components/back-button";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

export default function BasicGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
      getorder(db).then(order => setData(order));
  }, []);
  console.log(getorder(db))
  console.log(getres(db))
  return (
    <Grid container direction="column">
      <Grid container>
        <div className="fixed">
          <button className="fixedhead">&ensp;</button>
        </div>
        <Grid xs={2}>
          <BackButton />
        </Grid>
        <Grid xs={7}></Grid>
        <Grid xs={3}>
          <br />
          <div className="fixed">
            <Fliter />
          </div>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid xs={12}>
          <br />
          <br />
          <br />
        </Grid>
        {data.map(d =>
          <Link to="/partorderdata" state={{ order:{d}, source:"/join-order" }}><button className="join_button" key={d.name}>
            <Grid container>
              <Grid container>
                <Grid xs={2} className="group_image">
                  <div className="group_image">
                  <Image
                      src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                      roundedCircle width="40"
                  />
                  </div>
                </Grid>
                <Grid xs={10} className={"group_name"}>
                  {d.participant[0].username}
                </Grid>
                <Grid xs={6}>時間：17:30
                </Grid>
                <Grid xs={6}>人數：
                  {d.id}
                </Grid>
                <Grid xs={12}>地點：
                  {d.dest}
                </Grid>
                <Grid container>
                  {d.tag.map(e =>
                    <div key={e.tag}>
                      <Grid xs="auto" className="tag">
                        {e}
                      </Grid>
                    </div>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </button></Link>
        )}
      </Grid>
    </Grid>
  );
}
