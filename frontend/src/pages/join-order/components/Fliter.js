import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Fliter = ({}) => {
  return (
    <DropdownButton align="end" title="Fliter" id="dropdown-menu-align-end">
      <Dropdown.Item eventKey="1">Distance</Dropdown.Item>
      <Dropdown.Item eventKey="2">Friends</Dropdown.Item>
      <Dropdown.Item eventKey="3">Time</Dropdown.Item>
    </DropdownButton>
  );
};

export default Fliter;

/*
const Filter = ({}) => {
  return (
    <button className="fliters">
      <div style={{ fontSize: 21 }}>
        Distance
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="-14 -18 32 32"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
    </button>
  );
};
*/
