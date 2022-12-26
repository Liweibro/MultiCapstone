import {React, useState} from 'react';
import {useLocation} from 'react-router-dom';
import './MyOrder.css';
import { Button, Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {ArrowLeftCircle, CheckCircle} from "react-bootstrap-icons";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc, setDoc, arrayUnion, GeoPoint  } from 'firebase/firestore/lite';
import { useEffect } from 'react';
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

function GetTime(props) {
    var myDate = new Date(props.time);
    return (
      <div>{myDate.getHours()}：{myDate.getMinutes()}</div>
    );
}

// from order-meals, to myorder
function OrderHasBeenPart(props) {
    const [uid, SetUID] = useState("");
    // console.log(uid)
    console.log(props.oid)
    // console.log(props.part.part)

    const [items, setitems] = useState([]);
    var total = 0;
    function iterItem() {
        const next = props.part.part.map((d, index) => {
           var now = d.item;
           items.push(now);
            total += d.total;
        });
        return items;
    }
    // console.log(items)

    async function updateOrder(db, OID, docData) {
        const Ref = doc(db, "data", OID);
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
        
        updateOrder(db, OID, docData);
        createUserList(db, OID, username);
    }

    return (
        <Modal 
          {...props} 
          dialogClassName="modal-width-center"
          aria-labelledby="contained-modal-title-vcenter"
          centered
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
                <Link to="/myorder" state={{ uid:{uid} }}><Button onClick={(event) => { props.onHide(); joinOrder(db, props.oid, uid) } } id="btn-second"
                >確認前往</Button></Link>
            </Modal.Footer>
        </Modal>
    );
}

// from join-orders, to order-meals >> 訂單已參與!
function GetRes(props) {
    const resName = props.order.d[1].restaurant_name; //order的餐廳名字
    const oid = props.order.d[0];
    var rd = props.res; //餐廳data
    console.log(resName)
    
    if (resName == rd[1].name)
    {
        return (
            <>
                <Link to="/ordermeal" state={{ res:{rd}, oid:{oid}, source:"/join-orders" }}><Button id="btn-second" style={{width: "100%", backgroundColor:"#d9d9d9"}}>
                    <div class="footer" style={{textAlign:"center"}}><CheckCircle color='#7C7C7C' style={{ margin: "0% 1% 0% 0%", }}/>確認參與此訂單</div>
                </Button></Link>
            </>
        )
    }
    else {
        return;
    }
}

function PartOrder() {
    const location = useLocation()
    // console.log(location.state.order)
    const d = location.state.order;
    var part = location.state.part;

    const counters = Array.from({ length: d.d[1].order_num }); 

    const [orderplaced, placedOpened] = useState(false);
    const showModal = () => {
        placedOpened(true);
    }
    const hideModal = () => {
        placedOpened(false);
    }

    const [resdata, setresData] = useState([]);

    useEffect(() => {
        getres(db).then(res => setresData(res));
    }, []);

    // from order-meals, 點好餐了 >> 跳至我的訂單
    if(location.state.source == "/Edit")
    {
        // console.log("first")
        return (
            <>
            <div className='Back'><ArrowLeftCircle size={25}/></div>
            
            <div class="container">
                <div class="row"><br></br><br></br><br></br></div>
    
                <div class="row">
                    <div class="col" />
    
                    <div class="col-9">
                        <div class="top-container"> {/* 上方 */}
                            <div class="row row-cols-auto justify-content-center">
                                <div class="col-3 text-right">人數：</div>
                                <div className='NumberBox'>{d.d[1].human_lowerbound}</div>
                                <div class="col-1">~</div>
                                <div className='NumberBox'>{d.d[1].human_upperbound}</div>
                            </div>
                            <div class="row row-cols-auto justify-content-center">
                                <div class="col-4">送餐時間：</div>
                                <div class="col-6 TextBox">{d.d[1].autosend?<GetTime time={d.d[1].autosend_time.seconds*1000}/>:"未設定自動送出"}</div>
                            </div>
                            <div class="row row-cols-auto justify-content-center" style={{ marginBottom: "4%" }}>
                                <div class="col-4">取餐地點：</div>
                                <div class="col-6 TextBox">{d.d[1].dest}</div>
                            </div>
                        </div>
    
                        <div class="row">
                            <div className='ResName'>{d.d[1].restaurant_name}</div>
                        </div>
    
                        <div class="row row-cols-auto justify-content-between">
                            <div>總人數：</div>
                            <div className='NumberBox'>{d.d[1].order_num}</div>
    
                            <div>總價格：</div>
                            <div className='NumberBox' style={{ width: "4em" }}>{d.d[1].sum_price}元</div>
                        </div>
    
                        <br></br>
                        <div class="bottom-container" style={{paddingTop: "4%"}}> {/* 下方 */}
                            
                            {counters.map((_, index) => ( 
                            <div key={index} class="row justify-content-center">
                                <div class="col-10 UserBox" style={{textAlign:"center", paddingTop:"20px"}}>
                                    {d.d[1].participant[index].username} {" "}
                                    {d.d[1].participant[index].total}元
                                </div>
                            </div>))}
                            
                            <div class="row"></div>
                        </div>
                    </div>
    
                    <div class="col" />
                </div>
            </div> {/*End of container*/}
            <nav class="navbar fixed-bottom" style={{backgroundColor:"#d9d9d9", justifyContent: "center",alignItems: "center" }}>
                {/* <a class="navbar-brand text-center">註腳固定下方</a> */}
                <Button onClick={(event) => {showModal()}} id="btn-second" style={{width: "100%", backgroundColor:"#d9d9d9"}}>
                    <div class="footer" style={{textAlign:"center"}}><CheckCircle color='#7C7C7C' style={{ margin: "0% 1% 0% 0%", }}/>確認參與此訂單</div>
                </Button>
            </nav>
    
            <OrderHasBeenPart show={orderplaced} onHide={hideModal} oid={d.d[0]} part={part}/>
            </>
        );
    }
    // from join-orders, 要去點餐 >> 跳去點餐
    else if(location.state.source == "/join-order")
    {

        // console.log("second")
        return (
            <>
            <div className='Back'><ArrowLeftCircle size={25}/></div>
            
            <div class="container">
                <div class="row"><br></br><br></br><br></br></div>
    
                <div class="row">
                    <div class="col" />
    
                    <div class="col-9">
                        <div class="top-container"> {/* 上方 */}
                            <div class="row row-cols-auto justify-content-center">
                                <div class="col-3 text-right">人數：</div>
                                <div className='NumberBox'>{d.d[1].human_lowerbound}</div>
                                <div class="col-1">~</div>
                                <div className='NumberBox'>{d.d[1].human_upperbound}</div>
                            </div>
                            <div class="row row-cols-auto justify-content-center">
                                <div class="col-4">送餐時間：</div>
                                <div class="col-6 TextBox">{d.d[1].autosend?<GetTime time={d.d[1].autosend_time.seconds*1000}/>:"未設定自動送出"}</div>
                            </div>
                            <div class="row row-cols-auto justify-content-center" style={{ marginBottom: "4%" }}>
                                <div class="col-4">取餐地點：</div>
                                <div class="col-6 TextBox">{d.d[1].dest}</div>
                            </div>
                        </div>
    
                        <div class="row">
                            <div className='ResName'>{d.d[1].restaurant_name}</div>
                        </div>
    
                        <div class="row row-cols-auto justify-content-between">
                            <div>總人數：</div>
                            <div className='NumberBox'>{d.d[1].order_num}</div>
    
                            <div>總價格：</div>
                            <div className='NumberBox' style={{ width: "4em" }}>{d.d[1].sum_price}元</div>
                        </div>
    
                        <br></br>
                        <div class="bottom-container" style={{paddingTop: "4%"}}> {/* 下方 */}
                            
                            {counters.map((_, index) => ( 
                            <div key={index} class="row justify-content-center">
                                <div class="col-10 UserBox" style={{textAlign:"center"}}>
                                    {d.d[1].participant[index].username} <br></br>
                                    {d.d[1].participant[index].total}元
                                </div>
                            </div>))}
                            
                            <div class="row"></div>
                        </div>
                    </div>
    
                    <div class="col" />
                </div>
            </div> {/*End of container*/}
            <nav class="navbar fixed-bottom" style={{backgroundColor:"#d9d9d9", justifyContent: "center",alignItems: "center" }}>
                {resdata.map(rd => <div key={rd.name} style={{width:"100%"}}>
                    <GetRes res={rd} order={d} />
                </div>)}
            </nav>
            </>
        );
    }


}

export default PartOrder;
