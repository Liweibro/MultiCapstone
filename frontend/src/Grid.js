import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restaurant_card from './Restaurant_card';

function Grid() {
    return (
        <Container>
          <Row style={{"height":100}}></Row>
          
          <Row>
            <Col></Col>

            <Col xs={9}>
                <Restaurant_card />
            </Col>

            <Col></Col>
          </Row>

          <Row style={{"height":100}}></Row>
        </Container>
    );
  }
  
  export default Grid;