import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Chatroom from './Chatroom/Chatroom';
import Orderlist from './Orderlist/Orderlist';
import Profile from './Profile/Profile';
import PersonalChat from './PersonalChat/PersonalChat';
import ScoreSlide from './ScoreSlide/ScoreSlide';
import OrderMeal from './order-meals/index'
import MyOrder from './my-orders'
import JoinOrder from './join-order'

function App() {
  return (
    <div >
       <Routes>
             <Route element={<Homepage />} path={'/'}></Route>
             <Route element={<Orderlist/>} path='/list'></Route>
             <Route element={<Profile/>} path='/profile'></Route>
             <Route element={<Chatroom/>} path='/chatroom'></Route>
             <Route element={<PersonalChat/>} path='/personalchat'></Route>
             <Route element={<ScoreSlide/>} path='/scoreslide'></Route>
             <Route element={<OrderMeal/>} path='/ordermeal'></Route>
             <Route element={<MyOrder/>} path='/myorder'></Route>
             <Route element={<JoinOrder/>} path='/joinorder'></Route>
      </Routes>
    </div>
  );
}

export default App;
