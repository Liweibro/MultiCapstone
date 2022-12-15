import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { BiUserCircle } from "react-icons/bi";

import '../all.css'

function PersonalChat() {
    return (
        <Container>
          <Row style={{"height":100}}></Row>
          
          <Row>
            <Col></Col>

            <Col xs={9}>
                <>
                    <Card body bg="light">
                        <Card.Title>
                            <BiUserCircle />{' '}
                            群組名稱
                        </Card.Title>
                        <Card.Text className="mb-2 text-muted">
                            最後一條訊息
                        </Card.Text>
                    </Card>
                    <br></br>
                    <Card body bg="light">
                        <Card.Title>
                            <BiUserCircle />{' '}
                            群組名稱
                        </Card.Title>
                        <Card.Text className="mb-2 text-muted">
                            最後一條訊息
                        </Card.Text>
                    </Card>
                    <br></br>
                    <Card body bg="light">
                        <Card.Title>
                            <BiUserCircle />{' '}
                            群組名稱
                        </Card.Title>
                        <Card.Text className="mb-2 text-muted">
                            最後一條訊息
                        </Card.Text>
                    </Card>
                    <br></br>
                    <Card body bg="light">
                        <Card.Title>
                            <BiUserCircle />{' '}
                            群組名稱
                        </Card.Title>
                        <Card.Text className="mb-2 text-muted">
                            最後一條訊息
                        </Card.Text>
                    </Card>
                    <br></br>
                    <Card body bg="light">
                        <Card.Title>
                            <BiUserCircle />{' '}
                            群組名稱
                        </Card.Title>
                        <Card.Text className="mb-2 text-muted">
                            最後一條訊息
                        </Card.Text>
                    </Card>
                    <br></br>
                    <Card body bg="light">
                        <Card.Title>
                            <BiUserCircle />{' '}
                            群組名稱
                        </Card.Title>
                        <Card.Text className="mb-2 text-muted">
                            最後一條訊息
                        </Card.Text>
                    </Card>
                </>
            </Col>

            <Col></Col>
          </Row>

          <Row style={{"height":100}}></Row>
        </Container>
    );
}
    
export default PersonalChat;