import {React, useState, useEffect, query, where } from "react";
import { v4 } from "uuid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Modal,  Card } from 'react-bootstrap';
import { PlusCircle, XCircle, CheckCircle } from "react-bootstrap-icons";
import PartOrderData from '../../OrderData/PartOrder'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc, setDoc, arrayUnion, GeoPoint  } from 'firebase/firestore/lite';
import { common } from "@mui/material/colors";
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
  const orderList = orderSnapshot.docs.map(function (doc){
    return [doc.id, doc.data()]
  });
  return orderList;
}
async function getloaction(db) {
    const loactionsCol = collection(db, 'location');
    const loactionsSnapshot = await getDocs(loactionsCol);
    const loactionsList = loactionsSnapshot.docs.map(doc => doc.data());
    return loactionsList;
}

const Edit = (props) => {
    // console.log(props.part)
  const [chooseID, idOpened] = useState(false);

  const showModal = () => {
      idOpened(true);
  }
  const hideModal = () => {
      idOpened(false);
  }

  if (props.source == "/join-orders")
  {
    return (
        <><div>
        <button className="buy" style={{ fontSize: 22 }} onClick={showModal}>
            加入購物車
        </button>
        </div>
        <OrderHasBeenPart show={chooseID} onHide={hideModal} res={props.res} oid={props.oid} part={props.part}/>
        </>
    );
  }

  // from order-meals
  else 
  {
    return (
        <><div>
        <button className="buy" style={{ fontSize: 22 }} onClick={showModal}>
            加入購物車
        </button>
        </div>
        <ChooseID show={chooseID} onHide={hideModal} res={props.res} part={props.part}/>
        </>
    );
  }
};

function GetTime(props) {
    var myDate = new Date(props.time);
    return (
      <div>在{myDate.getHours()}：{myDate.getMinutes()}將送出訂單</div>
    );
}

// 當前進行中的拚單
function Is_Res(props) {
    var resName = props.res_name;
    var d = props.order;
    var part = props.part;

    if (resName == d[1].restaurant_name) {
        return (
        <>
        <Card className="text-center">
            <Card.Header>由 {d[1].participant[0].username} 發起</Card.Header>
            <Card.Body>
            <Link to="/partorderdata" state={{ order:{d}, part:{part},source:"/Edit" }}><Button variant="dark">一起拼單 GO</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">{d[1].autosend? <GetTime time={d[1].autosend_time.seconds*1000}/>: "無設定自動送出時間"}</Card.Footer>
        </Card>
        <br></br>
        </>
        );
    }
    else {
        return;
    }
}

function ChooseID(props) {
//   console.log(props.res)

  const [data, setData] = useState([]);
  useEffect(() => {
      getorder(db).then(order => setData(order));
  }, []);

  const [ordersetting, settingOpened] = useState(false);
  const showModal = () => {
      settingOpened(true);
  }
  const hideModal = () => {
      settingOpened(false);
  }

  return (
      <>
      <Modal
          {...props}
          dialogClassName="modal-width-center"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
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
                <Is_Res res_name={props.res[1].name} order={d} part={props.part}/>
              </div>)}
              </div>

              <div>
                  <Button onClick={(event) => { props.onHide(); showModal(); } } id="btn-second" style={{margin: "10px"}}>仍要發起拼單</Button>
              </div>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: "#f5f5f5"}}/>
      </Modal>
      
      <OrderSetting show={ordersetting} onHide={hideModal} res={props.res} part={props.part}/>
      </>
  );
}

function OrderSetting(props) {
    // console.log(props.res)
    // console.log(props.part)
    console.log(getorder(db))
    console.log(props.res[1].name)
  const [orderplaced, placedOpened] = useState(false);
  const showModal = () => {
      placedOpened(true);
  }
  const hideModal = () => {
      placedOpened(false);
  }

  const [under_bound, SetUnder_bound] = useState(1);
  const [upper_bound, SetUp_bound] = useState(1);
  const res_name = props.res[1].name;
  const [uid, SetUID] = useState("");
  const [dst, SetDst] = useState("研三舍");
  const [autosend, SetAutosend] = useState(false);
  const HandleChange = () => {
    SetAutosend(!autosend);
  }
  const [sendtime, SetSendTime] = useState("Tue Dec 27 2022 14:00:00 GMT+800");
  const [items, setitems] = useState([]);
  var total = 0;
     function iterItem() {
        const next = props.part.map((d, index) => {
           var now = d.item;
           items.push(now);
            total += d.total;
        });
        return items;
    }
  const map = 
    {"十三舍": [24.36474647,121.5574838],
    "七舍": [24.804531, 120.994467],
    "十二舍": [24.784503359014682, 24.784503359014682],
    "十舍": [24.79033087249232, 120.99666381349259],
    "女二舍": [24.78462223089661, 120.99935127354443],
    "研三舍": [24.79218663298738, 120.9950263178108],
    "竹軒": [24.7903823212179, 120.99829697651035]}
  var point = [];
  const [tags, setTags] = useState([])

  function Tag ()
    {
        function handleKeyDown(e)
        {
            if(e.key !== 'Enter') return
            const value = e.target.value
            if(!value.trim()) return
            setTags([...tags, value])
            e.target.value = ''
        }

        function removeTag(index)
        {
            setTags(tags.filter((el, i) => i !== index))
        }

        return(
            <>
            <div style={{ fontSize: "24px", }}>Tag：</div>
            <div className='tags-input-container'>
                { tags.map((tag, index) => (
                    <div className='tag-item' key={index}>
                        <span className='text'>{tag}</span>
                        <span className='close' onClick={() => removeTag(index)}>&times;</span>
                    </div>
                )) }
                <input onKeyDown={handleKeyDown} type="text" className='tags-input' placeholder='add tag' />
            </div>
            </>
        )
    }

    async function createUserList(db, OID, UID) {
        const Ref = doc(db, "userList", UID);
        const docData ={
                            orderID:arrayUnion(OID)
                        }
        const docSnap = await getDoc(Ref);
    
        if (docSnap.exists()) {
            await updateDoc(Ref, docData);
            console.log("Document data:", docSnap.data());
        } else {
        
            await setDoc(Ref, docData);
        }
        
    }
    
    async function updateRes(db,RID,OID) {
        const Ref = doc(db, "restaurant", RID);
        const docSnap = await getDoc(Ref);
        // console.log("yes");
        console.log(docSnap.data().ord_num);
        updateDoc(Ref, {
            orderList: arrayUnion(OID),
            ord_num:docSnap.data().ord_num+1
        }).then(
            console.log('sucess')
        ).catch(function (error) { console.error("error: ", error); });
    }
    async function insertOrder(db, OID, docData) {
        
        await setDoc(doc(db, "order", OID), docData);
    }
    
    async function createOrder(db,RID) {
        // create Order
        // getGeopoint(db, dst).then(res => set_point(res))
        point = map[dst];
        const OID = Math.floor(Math.random() * 2839493).toString();
        const username = uid;
        const t = tags;
        const select_data = {
            autosend: autosend,
            autosend_time: new Date(sendtime),
            dest: dst,
            dest_geo: point,
            human_lowerbound: parseInt(under_bound , 10),
            human_upperbound: parseInt(upper_bound, 10),
            order_num: 1,
            participant: [
                { item: iterItem(), 
                total: total, 
                username:  uid  }],     
            restaurant_name: res_name,       
            sum_price: total,
            tag: t,
        }
        console.log(select_data)

        insertOrder(db, OID, select_data);
        updateRes(db, RID, OID);
        createUserList(db, OID, username);
        
    }

  return (
      <>
      <div>
          <Modal
              {...props}
              dialogClassName="modal-width-ordersetting"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              id="ex1"
              backdrop="static">
              <Modal.Header closeButton />
              <Modal.Body style={{"height":480}}>
                  <div className="container">
                      <div className="row justify-content-center row-cols-auto">  {/* 人數設定 */}
                          <div style={{ fontSize: "20px", }}>
                              人數：
                          </div>
                          <div className="bound_wrapper">
                            <select id="under_bound form-control" value={under_bound}
                                onChange={(e) => SetUnder_bound(e.target.value)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                          </div>
                          <div className="col-2">~</div>
                          <div>
                          <select id="upper_bound form-control" value={upper_bound}
                                onChange={(e) => SetUp_bound(e.target.value)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                          </div>
                          <div className="col-2" style={{ fontSize: "20px", }}>
                              人
                          </div>
                      </div>
                      <div className="row justify-content-center row-cols-auto align-items-center" >  {/* 推薦人數 */}
                            <div for="name" className="col-form-label" style={{ fontSize: "20px", marginRight:"15px" }}>暱稱</div>
                              <div className="col-4 align-self-center">
                                  <input type="text" className="form-control" id="name" style={{ backgroundColor: "#d9d9d9", height: "20px" }} 
                                  value={uid} onChange={(e) => SetUID(e.target.value)} />
                              </div>
                      </div>
                      <div className="row justify-content-center row-cols-auto align-items-center" >  {/* 推薦人數 */}
                          <div style={{ fontSize: "16px", }}>
                              （推薦 5 人）
                          </div>
                      </div>

                      {/* <br></br> */}
                      <div className="row row-cols-auto"> {/* 取餐地點 */}
                          <label for="送達地點" className="col-form-label twenty">送達地點</label>
                          <div className="col-6 align-self-center">
                              {/* <input type="text" className="form-control" id="送達地點" style={{ backgroundColor: "#d9d9d9", height: "20px" }} placeholder="" /> */}
                              <select id="dst form-control"  value={dst}
                                onChange={(e) => SetDst(e.target.value)} style={{width:"200px"}}>
                                <option value={"研三舍"}>研三舍</option>
                                <option value={"女二舍"}>女二舍</option>
                                <option value={"竹軒"}>竹軒</option>
                                <option value={"十三舍"}>十三舍</option>
                                <option value={"七舍"}>七舍</option>
                                <option value={"十舍"}>十舍</option>
                                <option value={"十二舍"}>十二舍</option>
                            </select>
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
                                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" style={{transform:"scale(1.2)"}}
                                         onChange={HandleChange} />
                                  <label className="col-form-check-label twentyfive" for="flexCheckDefault">
                                      自動送出
                                  </label>
                              </div>
                          </div>
                          <div className="row row-cols-auto">
                              <label for="自動送出時間" className="col-form-label twenty">自動送出時間</label>
                              <div className="col-4 align-self-center" style={{ fontSize: "20px", }}>
                                <select id="sendtime form-control"  value={sendtime}
                                    onChange={(e) => SetSendTime(e.target.value)} style={{width:"120px"}}>
                                    <option value={"Tue Dec 27 2022 14:00:00 GMT+800"}>14 : 00</option>
                                    <option value={"Tue Dec 27 2022 14:30:00 GMT+800"}>14 : 30</option>
                                    <option value={"Tue Dec 27 2022 15:00:00 GMT+800"}>15 : 00</option>
                                    <option value={"Tue Dec 27 2022 15:30:00 GMT+800"}>15 : 30</option>
                                </select>
                              </div>
                          </div>
                      </div>

                      <div> {/* Tag */}
                          <div className="row justify-content-center  row-cols-auto" style={{alignItems: "center" }}>
                              {/* <div className="col-4" style={{ fontSize: "24px", }}>Tag：</div> */}
                              {/* <div><PlusCircle /></div><div><XCircle color="gray" style={{ margin: "0% 50%", }} /></div> */}
                              <Tag/>
                          </div>
                      </div>

                  </div>  {/* end of container */}
              </Modal.Body>
              <Modal.Footer style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }}>
                  <Button onClick={(event) => {props.onHide() ;showModal(); createOrder(db, props.res[0])}} id="btn-second">
                      <CheckCircle />確認送出
                  </Button>
{/* //                   <Button onClick={(event) => {props.onHide() ;createOrder(db, props.res[0])}}>createOrder</Button> */}
              </Modal.Footer>
          </Modal>
      </div>

      <OrderHasBeenPlaced show={orderplaced} onHide={hideModal} uid={uid}/>
      </>
  );
}

function OrderHasBeenPlaced(props) {
    const navigate = useNavigate();
    const uid = props.uid;
    console.log('order has been', uid);
    async function updateOrder(db, OID, docData) {
        const Ref = doc(db, "order", OID);
        const docSnap = await getDoc(Ref);
        const origin_data = docSnap.data();
        await updateDoc(Ref, {
            participant: arrayUnion(docData),
            order_num: origin_data.order_num + 1,
            sum_price: origin_data.sum_price + docData.total,
        });
    
    }
    async function createUserList(db, OID, UID) {
        const Ref = doc(db, "userList", UID);
        const docData ={
                            orderID:arrayUnion(OID)
                        }
        const docSnap = await getDoc(Ref);
    
        if (docSnap.exists()) {
            await updateDoc(Ref, docData);
            console.log("Document data:", docSnap.data());
        } else {
        
            await setDoc(Ref, docData);
        }
        
    }
    
    
  return (
      <Modal 
        {...props}
        dialogClassName="modal-width-center"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
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
              <Button onClick={async(event) => {
                navigate("/myorder",{state:{uid:uid}})
                props.onHide();
              }}
                id="btn-second"
                >
                確認前往
              </Button>
          </Modal.Footer>
      </Modal>
  );
}


function OrderHasBeenPart(props) {
    const navigate = useNavigate();
    const [uid, SetUID] = useState("");
    // console.log(uid)
    console.log(props.oid)
    console.log(props.part)

    const [items, setitems] = useState([]);
    var total = 0;
    function iterItem() {
        const next = props.part.map((d, index) => {
           var now = d.item;
           items.push(now);
            total += d.total;
        });
        return items;
    }
    // console.log(items)
    async function updateOrder(db, OID, docData) {
        const Ref = doc(db, "order", OID);
        const docSnap = await getDoc(Ref);
        const origin_data = docSnap.data();
        await updateDoc(Ref, {
            participant: arrayUnion(docData),
            order_num: origin_data.order_num + 1,
            sum_price: origin_data.sum_price + docData.total,
        });
    
    }
    async function createUserList(db, OID, UID) {
        const Ref = doc(db, "userList", UID);
        const docData ={
                            orderID:arrayUnion(OID)
                        }
        const docSnap = await getDoc(Ref);
    
        if (docSnap.exists()) {
            await updateDoc(Ref, docData);
            console.log("Document data:", docSnap.data());
        } else {
        
            await setDoc(Ref, docData);
        }
        
    }
    async function joinOrder(db,OID,username) {
        // join Order
        // update the data to this order
        const docData = {
            item: iterItem(),
            total: total,
            username: username
        }
        console.log(docData)
        
        await updateOrder(db, OID, docData);
        await createUserList(db, OID, username);
    }
    

    return (
        <Modal 
          {...props} 
          dialogClassName="modal-width-center"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
        >
            <Modal.Header className='constheight' closeButton />
            <Modal.Body className='a'>
                <div for="name">
                    暱稱
                    <input type="text" id="name" 
                    style={{ backgroundColor: "#d9d9d9", height: "25px" , width:"40%", marginLeft:"4%", border:"none", borderRadius:"4%", padding:"2% 3%", fontSize:"20px"}}
                    value={uid} onChange={(e) => SetUID(e.target.value)} />
                </div>
                <br></br>
                訂單已參與！<br></br>
                請前往「我的訂單」查看詳細資訊！
            </Modal.Body>
            <Modal.Footer className='a' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
            >
                <Button onClick={async(event) => {
                    await joinOrder(db, props.oid, uid);
                    navigate("/myorder",{state:{uid:uid}})
                    props.onHide();
                }}
                    id="btn-second"
                    >
                    確認前往
              </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Edit;
