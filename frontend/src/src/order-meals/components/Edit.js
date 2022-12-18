import {React, useState, useEffect } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Button, Modal, Dropdown, Card } from 'react-bootstrap';
import { PlusCircle, XCircle, CheckCircle } from "react-bootstrap-icons";
import PartOrderData from '../../OrderData/PartOrder'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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

const Edit = ({}) => {
  // console.log(getorder(db))
  const [chooseID, idOpened] = useState(false);

  const showModal = () => {
      idOpened(true);
  }
  const hideModal = () => {
      idOpened(false);
  }

  return (
    <><div>
      <button className="buy" style={{ fontSize: 22 }} onClick={showModal}>
        加入購物車
      </button>
    </div>
    <ChooseID show={chooseID} onHide={hideModal} />
    </>
  );
};

function GetTime(props) {
    var myDate = new Date(props.time);
    return (
      <div>在{myDate.getHours()}：{myDate.getMinutes()}將送出訂單</div>
    );
}

function ChooseID(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
      getorder(db).then(res => setData(res));
  }, []);
  // console.log(data)

  const [ordersetting, settingOpened] = useState(false);
  const showModal = () => {
      settingOpened(true);
  }
  const hideModal = () => {
      settingOpened(false);
  }

  // {data.map(d => <div key={d.name}></div>)}

  return (
      <>
      <Modal
          {...props}
          dialogClassName="modal-width-center"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
          <Modal.Header style={{borderBottom:"none", backgroundColor: "#f5f5f5"}} closeButton />
          <Modal.Body className='a' style={{
              display: "block",
              justifyContent: "center",
              alignItems: "center",
          }}
          >
              <div className='black'>當前進行中的拼單</div>
              
              <div style={{height: "200px", overflow: "scroll", backgroundColor: "#d3d3d3", padding:"1.4em 0.2em", marginBottom:"1em" }}>
              {data.map(d => <div key={d.name}>
                {/* 當前訂單-楚泱card */}
                <Card className="text-center">
                  <Card.Header>由 {d.participant[0].username} 發起</Card.Header>
                  <Card.Body>
                    <Link to="/partorderdata" state={{ order:{d} }}><Button variant="dark">一起拼單 GO</Button></Link>
                  </Card.Body>
                  <Card.Footer className="text-muted">{d.autosend? <GetTime time={d.autosend_time.seconds*1000}/>: "無設定自動送出時間"}</Card.Footer>
                </Card>

                <br></br>
              </div>)}
              </div>

              <div>
                  <Button onClick={(event) => { props.onHide(); showModal(); } } id="btn-second" style={{margin: "10px"}}>仍要發起拚單</Button>
              </div>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: "#f5f5f5"}}/>
      </Modal>
      
      <OrderSetting show={ordersetting} onHide={hideModal}/>
      </>
  );
}

function OrderSetting(props) {
  const [orderplaced, placedOpened] = useState(false);
  const showModal = () => {
      placedOpened(true);
  }
  const hideModal = () => {
      placedOpened(false);
  }

  return (
      <>
      <div>
          <Modal
              {...props}
              dialogClassName="modal-width-ordersetting"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              id="ex1">
              <Modal.Header closeButton />
              <Modal.Body>
                  <div className="container">
                      <div className="row justify-content-center row-cols-auto">  {/* 人數設定 */}
                          <div style={{ fontSize: "20px", }}>
                              人數：
                          </div>
                          <div>
                              <Dropdown>
                                  <Dropdown.Toggle id="dropdown-autoclose-true" />

                                  <Dropdown.Menu>
                                      <Dropdown.Item href="#">1</Dropdown.Item>
                                      <Dropdown.Item href="#">2</Dropdown.Item>
                                      <Dropdown.Item href="#">3</Dropdown.Item>
                                  </Dropdown.Menu>
                              </Dropdown>
                          </div>
                          <div className="col-2">~</div>
                          <div>
                              <Dropdown>
                                  <Dropdown.Toggle id="dropdown-autoclose-true" />

                                  <Dropdown.Menu>
                                      <Dropdown.Item href="#">1</Dropdown.Item>
                                      <Dropdown.Item href="#">2</Dropdown.Item>
                                      <Dropdown.Item href="#">3</Dropdown.Item>
                                  </Dropdown.Menu>
                              </Dropdown>
                          </div>
                          <div className="col-2" style={{ fontSize: "20px", }}>
                              人
                          </div>
                      </div>
                      <div className="row justify-content-center row-cols-auto align-items-center" >  {/* 推薦人數 */}
                          <div style={{ fontSize: "14px", }}>
                              （推薦
                          </div>
                          <div style={{ fontSize: "14px", }}>
                              <Dropdown>
                                  <Dropdown.Toggle id="dropdown-autoclose-true" />

                                  <Dropdown.Menu>
                                      <Dropdown.Item href="#">1</Dropdown.Item>
                                      <Dropdown.Item href="#">2</Dropdown.Item>
                                      <Dropdown.Item href="#">3</Dropdown.Item>
                                  </Dropdown.Menu>
                              </Dropdown>
                          </div>
                          <div style={{ fontSize: "14px", }}>
                              人）
                          </div>
                      </div>

                      {/* <br></br> */}
                      <div className="row row-cols-auto"> {/* 取餐地點 */}
                          <label for="送達地點" className="col-form-label twenty">送達地點</label>
                          <div className="col-6 align-self-center">
                              <input type="text" className="form-control" id="送達地點" style={{ backgroundColor: "#d9d9d9", height: "20px" }} placeholder="" />
                          </div>
                      </div>
                      {/* <br></br> */}

                      <div> {/* 最低價格 */}
                          <div className="row row-cols-auto">
                              <div className="col-form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{transform:"scale(1.2)"}} />
                                  <label className="col-form-check-label twentyfive" for="flexCheckDefault">
                                      最低價錢
                                  </label>
                              </div>
                          </div>
                          <div className="row row-cols-auto">
                              <label for="價格最低下限" className="col-form-label twenty">價格最低下限</label>
                              <div className="col-4 align-self-center">
                                  <input type="text" className="form-control" id="送達地點" style={{ backgroundColor: "#d9d9d9", height: "20px" }} placeholder="" />
                              </div>
                          </div>
                      </div>

                      <div> {/* 自動送出 */}
                          <div className="row row-cols-auto">
                              <div className="col-form-check align-self-center">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{transform:"scale(1.2)"}} />
                                  <label className="col-form-check-label twentyfive" for="flexCheckDefault">
                                      自動送出
                                  </label>
                              </div>
                          </div>
                          <div className="row row-cols-auto">
                              <label for="自動送出時間" className="col-form-label twenty">自動送出時間</label>
                              <div className="col-4 align-self-center" style={{ fontSize: "20px", }}>
                                  <Dropdown>
                                      <Dropdown.Toggle id="dropdown-autoclose-true" className='time' />

                                      <Dropdown.Menu className='time'>
                                          <Dropdown.Item href="#" className='time'>17:15</Dropdown.Item>
                                          <Dropdown.Item href="#" className='time'>17:30</Dropdown.Item>
                                          <Dropdown.Item href="#" className='time'>17:45</Dropdown.Item>
                                      </Dropdown.Menu>
                                  </Dropdown>
                              </div>
                          </div>
                      </div>

                      <div> {/* Tag */}
                          <div className="row justify-content-center  row-cols-auto" style={{alignItems: "center" }}>
                              <div className="col-4" style={{ fontSize: "24px", }}>Tag：</div>
                              <div><PlusCircle /></div><div><XCircle color="gray" style={{ margin: "0% 50%", }} /></div>
                          </div>
                      </div>

                  </div>  {/* end of container */}
              </Modal.Body>
              <Modal.Footer style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }}>
                  <Button onClick={(event) => {props.onHide() ;showModal()}} id="btn-second">
                      <CheckCircle />確認送出
                  </Button>
              </Modal.Footer>
          </Modal>
      </div>

      <OrderHasBeenPlaced show={orderplaced} onHide={hideModal}/>
      </>
  );
}

function OrderHasBeenPlaced(props) {
  return (
      <Modal 
        {...props} 
        dialogClassName="modal-width-center"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header className='constheight' closeButton />
          <Modal.Body className='a'>
              訂單已發起！<br></br>
              請前往「我的訂單」查看詳細資訊！
          </Modal.Body>
          <Modal.Footer className='a' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}
          >
              <Link to="/myorder"><Button onClick={props.onHide} id="btn-second"
              >確認前往</Button></Link>
          </Modal.Footer>
      </Modal>
  );
}

export default Edit;
