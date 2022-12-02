import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';

import './All.css'
import images from './images/pexels-chan-walrus-958545.jpg';

function Restaurant_card() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
    <>
      <Card>
        <Card.Img variant="top" src={images}/>
        <Card.Body>
          <Card.Text>
            餐廳名稱
          </Card.Text>

          <div>
            <Badge pill bg="light" text="dark">
              距離1KM
            </Badge>{' '}
            <Badge pill bg="light" text="dark">
              價格200NT
            </Badge>
          </div>

          <id class="toggle">
            <Accordion.Header></Accordion.Header> 
          </id>
          
            
              
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            
          
        </Card.Body>
      </Card>
      <br/>
    </>
    </Accordion.Item>
    </Accordion>
  );
}

export default Restaurant_card;

