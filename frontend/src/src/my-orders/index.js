import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "./components/Item";
import "./index.css";
import BackButton from "./components/back-button";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Image from "react-bootstrap/Image";
//import "bootstrap-icons/font/bootstrap-icons.css"
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
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
  return (
    <Grid container direction={"column"}>
      <Grid container className="top_nav">
        <div className="fixed">
          <button className="fixedtest">&ensp;</button>
        </div>
        <Grid xs={2}>
          <BackButton></BackButton>
        </Grid>
        <Grid xs={10}></Grid>
        <Grid xs={12}>
          <br />
          <br />
          
          
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" value={1}>
                <div className="headtest">未送出</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>

        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-2" value={2}>
                <div className="headtest">已送出</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>

        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-3" value={3}>
                <div className="headtest">已完成</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <br />
        <br />
        {data.map(d => 
          <button className="group_button" key={d.name}>
            
              <Grid container>
                <Grid xs={3}>
                  <div className="user_image">
                    <Image
                      src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                      roundedCircle width="70"
                    />
                  </div>
                </Grid>
                <Grid xs={9} className={"user_name"}>
                  &ensp;{d.participant[0].username}
                </Grid>
              </Grid>
            
          </button>
        )}
      </Grid>

      <Navbar bg="dark" variant="dark" fixed="bottom">
          <Nav>
            
            <Nav.Link href="#search">
              <div className="bnav_item"><i class="bi bi-search"></i></div>
              <div className="bnav_word">Search</div> 
            </Nav.Link>

            <Link to='/joinorder'>
            <Nav.Link href="#together">
              <div className="bnav_item"><i class="bi bi-card-list"></i></div>
              <div className="bnav_word">Together</div>
            </Nav.Link>
            </Link>

            <Link to={'/MultiCapstone'}>
            <Nav.Link href="#home">
              <div className="bnav_item"><i class="bi bi-house"></i></div>
              <div className="bnav_word">Home</div>
            </Nav.Link>
            </Link>

            <Link to="/myorder">
            <Nav.Link href="#order">
              <div className="bnav_item"><i class="bi bi-bag"></i></div>
              <div className="bnav_word">Order</div>
            </Nav.Link>
            </Link>

            <Link to ='/profile'>
            <Nav.Link href="#account">
              <div className="bnav_item"><i class="bi bi-person"></i></div>
              <div className="bnav_word">Account</div>
            </Nav.Link>
            </Link>
          </Nav>
        
      </Navbar>

      
      <br />
      <br />
      <br />
    </Grid>
  );
}
