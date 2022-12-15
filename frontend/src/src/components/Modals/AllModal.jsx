import React, {useState} from 'react';
import './AllModal.css';
import { 
    Button, 
    Modal,
    Dropdown} from 'react-bootstrap';
import {PlusCircle, XCircle, CheckCircle} from "react-bootstrap-icons";

function ChooseID(props) {
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
        >
            <Modal.Header className='null' closeButton />
            <Modal.Body className='a' style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
                <div className='black'>請選擇你的身分</div>
                <div>
                    <Button onClick={(event) => { props.onHide(); showModal(); } } id="btn-second" style={{margin: "10px"}}>發起訂單</Button>
                </div>
                <div><Button onClick={props.onHide} id="btn-second" style={{margin: "10px"}}>參與訂單</Button>
                </div>
            </Modal.Body>
            <Modal.Footer />
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
                    <div class="container">
                        <div class="row justify-content-center row-cols-auto">  {/* 人數設定 */}
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
                            <div class="col-2">~</div>
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
                            <div class="col-2" style={{ fontSize: "20px", }}>
                                人
                            </div>
                        </div>
                        <div class="row justify-content-center row-cols-auto align-items-center" >  {/* 推薦人數 */}
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
                        <div class="row row-cols-auto"> {/* 取餐地點 */}
                            <label for="送達地點" class="col-form-label twenty">送達地點</label>
                            <div class="col-6 align-self-center">
                                <input type="text" class="form-control" id="送達地點" style={{ backgroundColor: "#d9d9d9", height: "20px" }} placeholder="" />
                            </div>
                        </div>
                        {/* <br></br> */}

                        <div> {/* 最低價格 */}
                            <div class="row row-cols-auto">
                                <div class="col-form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{transform:"scale(1.2)"}} />
                                    <label class="col-form-check-label twentyfive" for="flexCheckDefault">
                                        最低價錢
                                    </label>
                                </div>
                            </div>
                            <div class="row row-cols-auto">
                                <label for="價格最低下限" class="col-form-label twenty">價格最低下限</label>
                                <div class="col-4 align-self-center">
                                    <input type="text" class="form-control" id="送達地點" style={{ backgroundColor: "#d9d9d9", height: "20px" }} placeholder="" />
                                </div>
                            </div>
                        </div>

                        <div> {/* 自動送出 */}
                            <div class="row row-cols-auto">
                                <div class="col-form-check align-self-center">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{transform:"scale(1.2)"}} />
                                    <label class="col-form-check-label twentyfive" for="flexCheckDefault">
                                        自動送出
                                    </label>
                                </div>
                            </div>
                            <div class="row row-cols-auto">
                                <label for="自動送出時間" class="col-form-label twenty">自動送出時間</label>
                                <div class="col-4 align-self-center" style={{ fontSize: "20px", }}>
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
                            <div class="row justify-content-center  row-cols-auto" style={{alignItems: "center" }}>
                                <div class="col-4" style={{ fontSize: "24px", }}>Tag：</div>
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
                <Button onClick={props.onHide} id="btn-second"
                >確認前往</Button>
            </Modal.Footer>
        </Modal>
    );
}



function Example() {
    const [chooseID, idOpened] = useState(false);

    const showModal = () => {
        idOpened(true);
    }
    const hideModal = () => {
        idOpened(false);
    }

    return (
        <>
        <Button variant="primary" onClick={showModal}>
            Launch modal
        </Button>

        <ChooseID show={chooseID} onHide={hideModal} />
        </>
    );
}

export default Example;