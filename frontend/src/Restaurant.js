import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import './all.css'
import images from './images/pexels-chan-walrus-958545.jpg';

function Restaurant() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={images}/>
        <Card.Body>
          <Card.Text>
             餐廳名稱
          </Card.Text>
          
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Badge pill bg=" " text="dark">
                  距離 5 KM
                </Badge>{' '}
                <Badge pill bg=" " text="dark">
                  價格 200 NT
                </Badge>
              </Accordion.Header>
              <Accordion.Body>
                <Card className="text-center">
                  <Card.Header>由 0816148 發起</Card.Header>
                  <Card.Body>
                    <Button variant="dark">一起拼單 GO</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">在 20 分鐘後送出訂單</Card.Footer>
                </Card>

                <br></br>

                <Card className="text-center">
                  <Card.Header>由 0816148 發起</Card.Header>
                  <Card.Body>
                    <Button variant="dark">一起拼單 GO</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">在 20 分鐘後送出訂單</Card.Footer>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Img variant="top" src={images}/>
        <Card.Body>
          <Card.Text>
             餐廳名稱
          </Card.Text>
          
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Badge pill bg=" " text="dark">
                  距離 5 KM
                </Badge>{' '}
                <Badge pill bg=" " text="dark">
                  價格 200 NT
                </Badge>
              </Accordion.Header>
              <Accordion.Body>
                <Card className="text-center">
                  <Card.Header>由 0816148 發起</Card.Header>
                  <Card.Body>
                    <Button variant="dark">一起拼單 GO</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">在 20 分鐘後送出訂單</Card.Footer>
                </Card>

                <br></br>
                
                <Card className="text-center">
                  <Card.Header>由 0816148 發起</Card.Header>
                  <Card.Body>
                    <Button variant="dark">一起拼單 GO</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">在 20 分鐘後送出訂單</Card.Footer>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Card.Body>
      </Card>
    </>
  );
}

export default Restaurant;

