import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { BiSearch, BiCart, BiUser, BiGroup, BiHomeAlt } from "react-icons/bi";
import "./index.css";
import BackButton from "./components/back-button";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Image, { propTypes } from "react-bootstrap/Image";
//import "bootstrap-icons/font/bootstrap-icons.css"
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs,  doc, getDoc, } from 'firebase/firestore/lite';

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

async function get_spc_order(db, OID) {
  const Ref = doc(db, 'order', OID);
  const snap = await getDoc(Ref);
  
  return [snap.data()];
}

async function myorder(db, UID) {
  const ordersCol = doc(db, 'userList', UID);
  const Snapshot = await getDoc(ordersCol);
  const data = [];
  const User_orderdata = [];
  if (Snapshot.data()) {
      
      const orderlist = Snapshot.data().orderID;
      // console.log(orderlist)
      for (var i = 0; i < orderlist.length; i++){
          // console.log(orderlist[i]);
          data.push((await get_spc_order(db, orderlist[i])).map(function (d) {
              return d;
          })) ;
      }
      console.log(data);
      return data;

  }
  else {
      return [];
  }
 

  
  
}

export default function BasicGrid() {
  const location = useLocation();
  const uid = location.state.uid;
  const [data, setData] = useState([]);

  useEffect(() => {
      // getorder(db).then(order => setData(order));
      myorder(db, uid).then(res => setData(res));
  }, []);
  console.log(uid)

  return (
    <>
    <Grid container direction={"column"}>
      <Grid container className="top_nav">
        <div className="fixed">
          <div className="fixedtest">&ensp;</div>
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
              <ToggleButton id="tbg-radio-1" value={1} variant="secondary">
                <div className="headtest">未送出</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>

        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-2" value={2} variant="secondary">
                <div className="headtest">已送出</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>

        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <div className="fixed">
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-3" value={3} variant="secondary">
                <div className="headtest">已完成</div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
      </Grid>
        <br /><br /><br />
      <Grid container >
        <Grid xs={1}></Grid>
        <Grid xs={10}>
        {data.map(d => 
          <Link to="/MyOrderData" state={{ order:d }}><button className="group_button" key={d.name}>
            
              <Grid container >
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
                  {d[0].participant[0].username}
                </Grid>
              </Grid>
            
          </button></Link>
        )}
        
        </Grid>
        
        <Grid xs={1}></Grid>
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

      <Link to="/myorder" state={{ uid:"告白校花" }}>
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