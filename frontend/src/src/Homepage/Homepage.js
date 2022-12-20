import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Button, Badge, Container, Row, Col, Card, Nav, Navbar} from 'react-bootstrap';

import '../all.css'
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
async function getorder(db) {
  const ordersCol = collection(db, 'order');
  const orderSnapshot = await getDocs(ordersCol);
  const orderList = orderSnapshot.docs.map(doc => doc.data());
  return orderList;
}
async function getres(db) {
  const resCol = collection(db, 'restaurant');
  const resSnapshot = await getDocs(resCol);
  const resList = resSnapshot.docs.map(doc => [doc.id, doc.data()]);
  return resList;
}

function Homepage() {
  console.log(getorder(db));
  const [resdata, setresData] = useState([]);

  useEffect(() => {
    getres(db).then(res => setresData(res));
  }, []);

  return (
    <Container>
          <Row style={{"height":100}}></Row>
          
          <Row>
            <Col><Link to="/map">map</Link></Col>

            <Col xs={9}>
              {resdata.map(rd => <div key={rd[1].name}>
                
                  <Card>
                    <Link to="/ordermeal" state={{ order:{rd} }}><Card.Img variant="top" src={images}/></Link>
                    <Card.Body>
                      <Card.Text>
                        {rd[1].name}{' '}
                        
                        <Badge pill bg="light" text="dark">
                          0
                        </Badge>
                        <br/>
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
    </Container>
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
