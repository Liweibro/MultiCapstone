import React, {useState} from 'react';
import './MyOrder.css';
import { 
    Button,
    } from 'react-bootstrap';
import {ArrowLeftCircle, CheckCircle} from "react-bootstrap-icons";

function PartOrder() {
    return (
        <>
        <div className='Back'><ArrowLeftCircle size={25}/></div>
        
        <div class="container">
            <div class="row"><br></br><br></br><br></br></div>

            <div class="row">
                <div class="col" />

                <div class="col-9">
                    <div class="container top-container"> {/* 上方 */}
                        <div class="row row-cols-auto justify-content-center">
                            <div class="col-3 text-right">人數：</div>
                            <div className='NumberBox'>3</div>
                            <div class="col-1">~</div>
                            <div className='NumberBox'>5</div>
                        </div>
                        <div class="row row-cols-auto justify-content-center">
                            <div class="col-4">送餐時間：</div>
                            <div class="col-6 TextBox"></div>
                        </div>
                        <div class="row row-cols-auto justify-content-center" style={{ marginBottom: "4%" }}>
                            <div class="col-4">取餐地點：</div>
                            <div class="col-6 TextBox"></div>
                        </div>
                    </div>

                    <div class="row">
                        <div className='ResName'>餐廳名稱</div>
                    </div>

                    <div class="row row-cols-auto justify-content-between">
                        <div>總人數：</div>
                        <div className='NumberBox'>4</div>

                        <div>總價格：</div>
                        <div className='NumberBox' style={{ width: "4em" }}>360元</div>
                    </div>

                    <br></br>
                    <div class="container bottom-container"> {/* 下方 */}
                        <div class="row justify-content-center">
                            <div class="col-10 UserBox" style={{ marginTop: "4%"}}>
                                {/* 加頭像 & 評價 */}
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-10 UserBox"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-10 UserBox"></div>
                        </div>
                        <div class="row"></div>
                    </div>
                </div>

                <div class="col" />
            </div>
        </div> {/*End of container*/}
        <nav class="navbar fixed-bottom" style={{backgroundColor:"#d9d9d9", justifyContent: "center",alignItems: "center" }}>
            {/* <a class="navbar-brand text-center">註腳固定下方</a> */}
            <div class="footer"><CheckCircle color='#7C7C7C' style={{ margin: "0% 1% 0% 0%", }}/>確認參與此訂單</div>
        </nav>
        </>
    );
}

export default PartOrder;