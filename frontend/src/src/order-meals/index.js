import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Edit from "./components/Edit";
import BackButton from "./components/back-button";
import "./index.css";
import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import{StarFill} from "react-bootstrap-icons";


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

export default function BasicGrid() {
    const location = useLocation();
    const d = location.state.order;
    var oid;
    if(location.state.source == "/join-orders")
      oid = location.state.oid.oid;
    console.log(location.state.source)
    //console.log(location.state.order)
    
    let menu_num = 0;
    menu_num = d.rd[1].menu.length;

    var statelist = [];
    for(let i=0;i<menu_num;i++)
        statelist.push(0);

    var [count, setList] = useState(statelist);//記得要用 setList 這樣才可以一次改整條 list
    var [total , setCount] = useState(0);

    var pricelist=[];
    for(let i=0;i<menu_num;i++)
      pricelist.push(d.rd[1].menu[i].price);

    var [participant, setParticipant] = useState([]);
    let check = 0;
    const AddItem = (x) => {
      setParticipant([...participant, {
        //id:participant.length,
        item: d.rd[1].menu[x].element,
        total: d.rd[1].menu[x].price,
        username:""
      }])
    }
    
    function deleteItem(x){
      setParticipant(function(prev){
          return prev.filter(participant => participant.item !== d.rd[1].menu[x].element)
      })
    }
    console.log(participant)

    function reducecount(x){
        //console.log(count);
        let now = count.map(x=>x);
        // js 有深淺拷貝  所以這邊用 map 重新創一個新的陣列
        // 不可以單純改原本的 count 他會沒有變化
        // 把新的 now 當作新的 list , add 同理
        if(now[x]==0){
          console.log("<0 wrong");
          return;
        }
        now[x]-=1;
        setList(now);

        let nowtotal = total;
        nowtotal-=pricelist[x];
        setCount(nowtotal);
        console.log(total,x);
        deleteItem(x);
    }
    function addcount(x){
        //console.log(count);
        let now = count.map(x=>x);
        now[x]+=1;
        setList(now);

        let nowtotal = total;
        nowtotal+=pricelist[x];
        setCount(nowtotal);
        //console.log(total,x);
        AddItem(x);
    }

    

// onclick 的地方要寫成那種形式要小心
    return (
        <Grid container direction="column">
          <Grid container>
            <div className="fixed">
              <button className="fixedhead">&ensp;</button>
            </div>
            <Grid xs={2}>
              <BackButton />
            </Grid>
            <Grid xs={10}></Grid>
          </Grid>
  
          <Grid container>
            <Grid xs={12}>
              <br />
              <br />
              <br />
              <br />
              <div className="res_name">&ensp;{d.rd[1].name}</div>
            </Grid>
            <Grid xs={2}>
              &ensp;&ensp;&ensp;<StarFill size={25}/>
            </Grid>
            <Grid xs={10} className={"star"}>
              <div>{d.rd[1].star}</div>
            </Grid>
          </Grid>
          <Grid container>
            {d.rd[1].menu.map((m, index) =>
              <button className="meal_button" key={d.rd[1].menu}>
                <Grid container>
                  <Grid xs={7} className={"meal_name"} >
                    <div>{m.element}</div>
                  </Grid>
                  <Grid xs={1}>
                    <button onClick={() => reducecount(index)}>-</button>
                  </Grid>
                  <Grid xs={1} className="price">
                    <div>{count[index]}</div>
                  </Grid>
                  <Grid xs={1}>
                    <button onClick={() => addcount(index)}>+</button>
                  </Grid>
                  <Grid xs={2} className={"price"}>
                    <div>${m.price}/份</div>
                  </Grid>
                </Grid>
              </button>
            )}
          <div>總和${total}</div>
          </Grid> 
          <br />
          <br />
          <br />
          <br />
          <Grid container>
            <Grid xs={12}>
              <Edit res={d.rd} part={participant} oid={oid} source={location.state.source}/>
            </Grid>
          </Grid>
        
        
        </Grid>
        
      );
}
