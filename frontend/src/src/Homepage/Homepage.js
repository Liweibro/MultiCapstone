import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import { BiSearch, BiCart, BiUser, BiGroup, BiHomeAlt } from "react-icons/bi";

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
    <>
    <Container>
          <Row style={{"height":50}}></Row>
          
          <Row>
            <Col>
              {/* some functions
              <br/>
              <Link to="/tag">tag</Link>
              <br/>
              <Link to="/map">map</Link> */}
            </Col>

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
    </Container>

    <div className='navbar'>
      <ul>
        <span className = "icon"> <BiSearch/> </span>
        <br/>
        <span className = "text">Search</span>
      </ul>

      <Link to='/joinorder'>
        <ul>
          <span className = "icon"> <BiGroup/> </span>
          <br/>
          <span className="text">Together</span>
        </ul>
      </Link>

      <Link to={'/MultiCapstone'}>
        <ul>
          <span className = "icon"> <BiHomeAlt/> </span>
          <br/>
          <span className="text">Home</span>
        </ul>
      </Link>

      <Link to="/myorder">
        <ul>
          <span className = "icon"> <BiCart/> </span>
          <br/>
          <span className="text">Order</span>
        </ul>
      </Link>

      <Link to ='/profile'>
        <ul>
          <span className = "icon"> <BiUser/> </span>
          <br/>
          <span className="text">Account</span>
        </ul>
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
