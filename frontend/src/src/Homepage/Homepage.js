import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Button, Badge, Container, Row, Col, Card} from 'react-bootstrap';

import '../all.css'
import images from '../images/pexels-chan-walrus-958545.jpg';

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
  const resList = resSnapshot.docs.map(doc => doc.data());
  return resList;
}

function Restaurant() {
  console.log(getres(db))
  return (
    <Container>
          <Row style={{"height":100}}></Row>
          
          <Row>
            <Col></Col>

            <Col xs={9}>
              <><Link to=""></Link>
                <Card>
                  <Card.Img variant="top" src={images}/>
                  <Card.Body>
                    <Card.Text>
                      餐廳名稱
                    </Card.Text>
                    
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <Badge pill bg=" " text="dark">
                            距離 5 KM
                          </Badge>{' '}
                          <Badge pill bg=" " text="dark">
                            價格 200 NT
                          </Badge>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Card className="text-center">
                            <Card.Header>由 0816148 發起</Card.Header>
                            <Card.Body>
                              <Button variant="dark">一起拼單 GO</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">在 20 分鐘後送出訂單</Card.Footer>
                          </Card>

                          <br></br>

                          <Card className="text-center">
                            <Card.Header>由 0816148 發起</Card.Header>
                            <Card.Body>
                              <Button variant="dark">一起拼單 GO</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">在 20 分鐘後送出訂單</Card.Footer>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                  </Card.Body>
                </Card>
                <br/>
              </>
            </Col>

            <Col></Col>
          </Row>

          <Row style={{"height":100}}></Row>
    </Container>
  );
}

export default Restaurant;
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