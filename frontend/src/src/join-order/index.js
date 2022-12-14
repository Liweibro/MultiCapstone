import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Fliter from "./components/Fliter";
import { BiSearch, BiCart, BiUser, BiGroup, BiHomeAlt, BiMap, BiReceipt } from "react-icons/bi";
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

  const orderList = orderSnapshot.docs.map(function (doc) {
      
      return [doc.id, doc.data()];
  });

  return orderList;
}
async function getres(db) {
  const resCol = collection(db, 'restaurant');
  const resSnapshot = await getDocs(resCol);
  
  const resList = resSnapshot.docs.map(function (doc) {
      
      return [doc.id, doc.data()];
  });
  
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
    <>
    <div className='top_navbar_container'>
            <Link to='/joinorder'>
                <div className='list'>
                <span className = "top_nav_icon"> <BiReceipt/> </span>
                <br/>
                <span className="top_nav_text">List</span>
                </div>
            </Link>

            <Link to={'/Map'}>
                <div className='map'>
                    <span className = "top_nav_icon"> <BiMap/> </span>
                    <br/>
                    <span className = "top_nav_text">Map</span>
                </div>
            </Link>

            <Link to='/joinorder'>
                <div className='friends'>
                <span className = "top_nav_icon"> <BiGroup/> </span>
                <br/>
                <span className="top_nav_text">Friends</span>
                </div>
            </Link>
        </div>

        <br />
    <Grid container direction="column">
      {/* <Grid container>
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
      </Grid> */}

      <Grid container direction="column">
        <Grid xs={12}>
          {/* <br />
          <br />
          <br /> */}
        </Grid>
        {data.map(d =>
          <Link to="/partorderdata" state={{ order:{d}, source:"/join-order" }}><button className="join_button" key={d[1].name}>
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
                  {d[1].participant[0].username}
                </Grid>
                <Grid xs={6}>?????????17:30
                </Grid>
                <Grid xs={6}>?????????
                  {d[1].order_num}
                </Grid>
                <Grid xs={12}>?????????
                  {d[1].dest}
                </Grid>
                <Grid container>
                  {d[1].tag.map(e =>
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
    <div className='navbar_container'>
      <div className='search'>
        <span className = "nav_icon"> <BiSearch/> </span>
        <br/>
        <span className = "nav_text">Search</span>
      </div>

      <Link to='/joinorder'>
        <div className='together'>
          <span className = "nav_icon"> <BiGroup/> </span>
          <br/>
          <span className="nav_text">Together</span>
        </div>
      </Link>

      <Link to={'/MultiCapstone'}>
        <div className='home'>
          <span className = "nav_icon"> <BiHomeAlt/> </span>
          <br/>
          <span className="nav_text">Home</span>
        </div>
      </Link>

      <Link to="/myorder" state={{ uid:"????????????" }}>
        <div className='order'>
          <span className = "nav_icon"> <BiCart/> </span>
          <br/>
          <span className="nav_text">Order</span>
        </div>
      </Link>

      <Link to ='/profile'>
        <div className='account'>
          <span className = "nav_icon"> <BiUser/> </span>
          <br/>
          <span className="nav_text">Account</span>
        </div>
      </Link>
    </div>
    </>
  );
}
