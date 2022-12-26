import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import './MyOrder.css';
import { 
    Button,
    } from 'react-bootstrap';
import {ChatText, ArrowLeftCircle} from "react-bootstrap-icons";

function GetTime(props) {
    var myDate = new Date(props.time);
    return (
      <div>{myDate.getHours()}：{myDate.getMinutes()}</div>
    );
}

function MyOrder() {
    const location = useLocation()
    console.log(location.state.order)
    const order = location.state.order[0];

    const counters = Array.from({ length: order.d.order_num }); 

    return (
        <>
        <div className='Back'><ArrowLeftCircle size={30}/></div>
        <div class="container">
            <div class="row"><br></br><br></br><br></br></div>

            <div class="row">
                <div class="col" />

                <div class="col-9">
                    <div class="top-container"> {/* 上方 */}
                        <div class="row row-cols-auto justify-content-center">
                            <div class="col-3 text-right">人數：</div>
                            <div className='NumberBox'>{order.d.human_lowerbound}</div>
                            <div class="col-1">~</div>
                            <div className='NumberBox'>{order.d.human_upperbound}</div>
                        </div>
                        <div class="row row-cols-auto justify-content-center">
                            <div class="col-4">送餐時間：</div>
                            <div class="col-6 TextBox">{order.d.autosend?<GetTime time={order.d.autosend_time.seconds*1000}/>:"未設定自動送出"}</div>
                        </div>
                        <div class="row row-cols-auto justify-content-center" style={{ marginBottom: "4%" }}>
                            <div class="col-4">取餐地點：</div>
                            <div class="col-6 TextBox">{order.d.dest}</div>
                        </div>
                    </div>

                    <div class="row">
                        <div className='ResName'>{order.d.restaurant_name}</div>
                    </div>

                    <div class="row row-cols-auto justify-content-between">
                        <div>總人數：</div>
                        <div className='NumberBox'>{order.d.order_num}</div>

                        <div>總價格：</div>
                        <div className='NumberBox' style={{ width: "4em" }}>{order.d.sum_price}</div>
                    </div>

                    <br></br>
                    <div class="bottom-container"> {/* 下方 */}

                        {counters.map((_, index) => ( 
                        <div key={index} class="row justify-content-center">
                            <div class="col-10 UserBox" style={{textAlign:"center"}}>
                                {order.d.participant[index].username} <br></br>
                                {order.d.participant[index].total}元
                            </div>
                        </div>))}

                        <div class="row"></div>
                    </div>

                    <div style={{ float: "right" }}><ChatText size={50} /></div>
                </div>

                <div class="col" />
            </div>
        </div></>
    );
}

export default MyOrder;
