import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Container, Row, Col, Card } from 'react-bootstrap';
import { BiSearch, BiCart, BiUser, BiGroup, BiHomeAlt } from "react-icons/bi";
import { AiFillStar, AiFillNotification } from "react-icons/ai";
import { BsList, BsPersonCircle, BsShieldLockFill, BsPersonPlusFill, BsInfoCircleFill, BsQuestionCircleFill } from "react-icons/bs";

//
import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
//

import './Homepage.css'
import images from '../images/pexels-chan-walrus-958545.jpg';

import { useEffect, useState } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { Link } from "react-router-dom";
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
// async function getorder(db) {
//   const ordersCol = collection(db, 'order');
//   const orderSnapshot = await getDocs(ordersCol);
//   const orderList = orderSnapshot.docs.map(doc => doc.data());
//   return orderList;
// }
async function getres(db) {
  const resCol = collection(db, 'restaurant');
  const resSnapshot = await getDocs(resCol);
  const resList = resSnapshot.docs.map(doc => [doc.id, doc.data()]);
  return resList;
}

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow} className="me-2">
        <BsList/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} style={{"width":300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><BsPersonCircle style={{"padding":20 ,"width":100, "height":100}}/>username</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='user_info_text'>
            <BsShieldLockFill/> 隱私中心
            <br/>
            <BsPersonPlusFill/> 邀請朋友
            <br/>
            <BsInfoCircleFill/> 會員
            <br/>
            <BsQuestionCircleFill/> 幫助
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Homepage() {
  console.log(getres(db));
  const [resdata, setresData] = useState([]);

  useEffect(() => {
    getres(db).then(res => setresData(res));
  }, []);

  return (
    <>
    <div className='top_container'>
      <div classname='app_name'>一起拼單GO <AiFillNotification/></div>
      <div className='user_info'>
        {['end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </div>
    </div>

    <Container>
          <Row style={{"height":20}}></Row>
          
          <Row>
            <Col></Col>

            <Col xs={9}>
              {resdata.map(rd => <div key={rd[1].name}>
                
                  <Card>
                    <Link to="/ordermeal" state={{ order:{rd} }}><Card.Img variant="top" src={images}/></Link>
                    <Card.Body>
                      <Card.Text>
                        {rd[1].name}{' '}
                        
                        <Badge pill bg="light" text="dark">
                          {rd[1].ord_num}
                        </Badge>
                        <br/>
                          
                        <Badge pill bg=" " text="dark">
                          {rd[1].star} <AiFillStar style={{"height":11, "width":11}}/>
                        </Badge>

                        <Badge pill bg=" " text="dark">
                          平均價格 {rd[1].adv_price}NT
                        </Badge>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br/>
              </div>)}
              
            </Col>

            <Col></Col>
          </Row>

          <Row style={{"height":100}}></Row>
    </Container>

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
