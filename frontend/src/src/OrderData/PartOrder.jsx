import {React, useState} from 'react';
import {useLocation} from 'react-router-dom';
import './MyOrder.css';
import { Button, Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {ArrowLeftCircle, CheckCircle} from "react-bootstrap-icons";

function GetTime(props) {
    var myDate = new Date(props.time);
    return (
      <div>{myDate.getHours()}：{myDate.getMinutes()}</div>
    );
}

function OrderHasBeenPart(props) {
    return (
        <Modal 
          {...props} 
          dialogClassName="modal-width-center"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header className='constheight' closeButton />
            <Modal.Body className='a'>
                訂單已參與！<br></br>
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

function PartOrder() {
    const location = useLocation()
    console.log(location.state.order)
    const d = location.state.order;
    // console.log(d.d.id);

    const counters = Array.from({ length: d.d.order_num }); 

    const [orderplaced, placedOpened] = useState(false);
    const showModal = () => {
        placedOpened(true);
    }
    const hideModal = () => {
        placedOpened(false);
    }

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
                            <div className='NumberBox'>3</div>
                            <div class="col-1">~</div>
                            <div className='NumberBox'>{d.d.human_limit}</div>
                        </div>
                        <div class="row row-cols-auto justify-content-center">
                            <div class="col-4">送餐時間：</div>
                            <div class="col-6 TextBox"><GetTime time={d.d.autosend_time.seconds*1000}/></div>
                        </div>
                        <div class="row row-cols-auto justify-content-center" style={{ marginBottom: "4%" }}>
                            <div class="col-4">取餐地點：</div>
                            <div class="col-6 TextBox">{d.d.dest}</div>
                        </div>
                    </div>

                    <div class="row">
                        <div className='ResName'>{d.d.restaurant_name}</div>
                    </div>

                    <div class="row row-cols-auto justify-content-between">
                        <div>總人數：</div>
                        <div className='NumberBox'>{d.d.order_num}</div>

                        <div>總價格：</div>
                        <div className='NumberBox' style={{ width: "4em" }}>{d.d.sum_price}元</div>
                    </div>

                    <br></br>
                    <div class="bottom-container" style={{paddingTop: "4%"}}> {/* 下方 */}
                        
                        {counters.map((_, index) => ( 
                        <div key={index} class="row justify-content-center">
                            <div class="col-10 UserBox" >
                                {/* 加頭像 & 評價 */}
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

        <OrderHasBeenPart show={orderplaced} onHide={hideModal}/>
        </>
    );
}

export default PartOrder;
