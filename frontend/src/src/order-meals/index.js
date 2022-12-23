import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Edit from "./components/Edit";
import Item from "./components/Item";
import BackButton from "./components/back-button";
import "./index.css";
import { useState, useEffect } from "react";
import Restaurant from "./components/Restaurant";
import Star from "./components/Star";
import {useLocation, Link} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import{StarFill} from "react-bootstrap-icons";

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
  const location = useLocation()
  console.log(location.state.order)
  const d = location.state.order;

  return (
    
    <Grid container direction="column">
      
      
      <Grid container>
        <div className="fixed">
          <button className="fixedhead">&ensp;</button>
        </div>
        <Grid xs={2}>
          <BackButton />
        </Grid>
        <Grid xs={10}></Grid>
      </Grid>

      <Grid container>
        <Grid xs={12}>
          <br />
          <br />
          <br />
          <br />
          <div className="res_name">&ensp;{d.rd.name}</div>
        </Grid>
        <Grid xs={2}>
          &ensp;&ensp;&ensp;<StarFill size={25}/>
        </Grid>
        <Grid xs={10} className={"star"}>
          <div>{d.rd.star}</div>
        </Grid>
      </Grid>
      <Grid container>
        {d.rd.menu.map(m =>
          <button className="meal_button" key={d.rd.menu}>
            <Grid container>
              <Grid xs={9} className={"meal_name"}>
                <div>{m.element}</div>
              </Grid>
              <Grid xs={3} className={"price"}>
                <div>{m.price}</div>
              </Grid>
            </Grid>
          </button>
        )}
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid container>
        <Grid xs={12}>
          <Edit res={d.rd}/>
        </Grid>
      </Grid>
    
    
    </Grid>
    
  );
}
