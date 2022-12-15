import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Carousel, Button, Badge} from 'react-bootstrap';
import { BiLike, BiDislike } from "react-icons/bi";

import '../all.css'
import images from '../images/pexels-william-choquette-1954526.jpg';

function ScoreSlide() {
  return (
    <Container>
          <Row style={{"height":100}}></Row>
          
          <Row>
            <Col></Col>

            <Col xs={9}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={images}
                    alt=""
                  />
                  <Carousel.Caption>
                    <h3>0816148</h3>
                    
                    <div className="d-grid gap-2">
                      <Button variant=" " size=" ">
                        <Badge pill bg="light" text="dark">
                          查看個人檔案
                        </Badge>
                      </Button>

                      <Button variant=" " size="lg">
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiLike />
                          </div>
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          略過
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiDislike />
                          </div>
                        </Badge>
                      </Button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={images}
                    alt=""
                  />
                  <Carousel.Caption>
                    <h3>0816148</h3>
                    
                    <div className="d-grid gap-2">
                      <Button variant=" " size=" ">
                        <Badge pill bg="light" text="dark">
                          查看個人檔案
                        </Badge>
                      </Button>

                      <Button variant=" " size="lg">
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiLike />
                          </div>
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          略過
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiDislike />
                          </div>
                        </Badge>
                      </Button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={images}
                    alt=""
                  />
                  <Carousel.Caption>
                    <h3>0816148</h3>
                    
                    <div className="d-grid gap-2">
                      <Button variant=" " size=" ">
                        <Badge pill bg="light" text="dark">
                          查看個人檔案
                        </Badge>
                      </Button>

                      <Button variant=" " size="lg">
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiLike />
                          </div>
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          略過
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiDislike />
                          </div>
                        </Badge>
                      </Button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={images}
                    alt=""
                  />
                  <Carousel.Caption>
                    <h3>0816148</h3>
                    
                    <div className="d-grid gap-2">
                      <Button variant=" " size=" ">
                        <Badge pill bg="light" text="dark">
                          查看個人檔案
                        </Badge>
                      </Button>

                      <Button variant=" " size="lg">
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiLike />
                          </div>
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          略過
                        </Badge>{' '}
                        <Badge pill bg="light" text="dark">
                          <div className = "icon">
                            <BiDislike />
                          </div>
                        </Badge>
                      </Button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col></Col>
          </Row>

          <Row style={{"height":100}}></Row>
    </Container>
  );
}

export default ScoreSlide;