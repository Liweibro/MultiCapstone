import React from 'react';
import './Tag.css';
import { Link } from "react-router-dom";
import { BiMap, BiReceipt, BiGroup } from "react-icons/bi";

function MyTabs() {
  return (
    <div className='top_navbar_container'>
      <Link to={'/joinorder'}>
        <div className='list'>
          <span className = "top_nav_icon"> <BiReceipt/> </span>
          <br/>
          <span className="top_nav_text">List</span>
        </div>
      </Link>

      <Link to={'/Map'}>
        <div className='map'>
            <span className = "top_nav_icon"> <BiMap/> </span>
            <br/>
            <span className = "top_nav_text">Map</span>
        </div>
      </Link>

      <Link to='/joinorder'>
        <div className='friends'>
          <span className = "top_nav_icon"> <BiGroup/> </span>
          <br/>
          <span className="top_nav_text">Friends</span>
        </div>
      </Link>
  </div>
  );
}

export default MyTabs;