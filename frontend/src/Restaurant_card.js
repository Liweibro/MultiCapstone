import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { BsFillCaretDownFill  } from "react-icons/bs";

import './All.css'
import images from './images/pexels-chan-walrus-958545.jpg';

function Restaurant_card() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={images}/>
        <Card.Body>
          <Card.Text>
            餐廳名稱
          </Card.Text>

          <>
            <div>
              {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="sm"
                  variant=""
                  title={
                    <div>
                      <Badge pill bg="light" text="dark">
                        距離1KM
                      </Badge>{' '}
                      <Badge pill bg="light" text="dark">
                        價格200NT
                      </Badge>{' '}
                      <Badge pill bg="light" text="dark">
                      <div className = "icon">
                        <BsFillCaretDownFill />
                      </div>
                      </Badge>
                    </div>
                  }
                >
                  <Dropdown.Item eventKey="1">123</Dropdown.Item>
                  <Dropdown.Item eventKey="2">123</Dropdown.Item>
                </DropdownType>
              ))}
            </div>
          </>
        </Card.Body>
      </Card>
      <br/>
    </>
  );
}

export default Restaurant_card;

