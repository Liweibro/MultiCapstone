import { useState } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
const Edit = ({}) => {
  return (
    <div>
    　<Link to="/allmodal">
        <button className="buy" style={{ fontSize: 22 }}>
          加入購物車
        </button>
      </Link>
    </div>
  );
};

export default Edit;
