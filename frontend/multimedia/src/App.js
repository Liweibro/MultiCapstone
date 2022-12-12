import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage'
import Chatroom from './Chatroom/Chatroom'
import Orderlist from './Orderlist/Orderlist'
import Profile from './Profile/Profile'
function App() {
  return (
    <div >
       <Routes>
             <Route element={<Homepage />} path={'/'}></Route>
             <Route element={<Orderlist/>} path='/list'></Route>
             <Route element={<Profile/>} path='/profile'></Route>
             <Route element={<Chatroom/>} path='/chatroom'></Route>
      </Routes>
    </div>
  );
}

export default App;
