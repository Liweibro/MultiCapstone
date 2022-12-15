import { Container,Button, Card ,Row, Col  } from 'react-bootstrap'
import logo from '../logo.svg'
import self from '../0816018.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiChat } from "react-icons/hi";
import { BiChevronLeftCircle } from "react-icons/bi";
import './Profile.css'

function Profile() {
    const photo = 'https://picsum.photos/1920/1200?random=1'
    const userName = 'Harvey Specter'
    const location = 'New York, USA'
 
    const comments = [
      {
        id: '1',
        photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
        userName: 'Mike Ross',
        content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
        createdAt: 1543858000000
      }
    ]

    return(
        <Container className='wrapper_container'>
            <Row>
                {/* <Card className='back'>
                    
                    <Card.Title className='title'>
                    
                        <img   src={logo} style={{width: 80,height:80 ,borderRadius:40 ,borderColor:'black'}} alt="profile"></img>
                        unefjkn
                    </Card.Title>
                
                </Card> */}
                <div className='back'>
                    <div className='arrows'>
                        <BiChevronLeftCircle/>
                    </div>
                    
                    <div className='left'>
                        
                        <div className='image' >
                            <img src={self} style={{width: 100,height :100,borderRadius:"50%" , position:"relative", objectFit: "cover"}}  alt="profile" />
                        </div>    
                    
                    </div>
                    <div className='right'>
                        <div className='half upper'>
                            <div className='title'>
                                Li Wei
                            </div>
                        </div>
                        <div className='half bottom'>
                            <div>
                                <HiChat style={{width:20}}/>
                                <div>100</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </Row>
            
            <Row>
                <Col xs={1}></Col>
                <Col xs={6}>
                    <Card style={{border:'white'}}>
                        <Card.Text>
                            good morning everyone my name is li wei bro
                        </Card.Text>
                        </Card>
                </Col>
                 
            </Row>
            <Row>
                <br>
                </br>
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={8}>
                    <Card style={{width:300}} >
                        <Card.Img variant="top"  style={{height:200}} src="https://picsum.photos/1920/1200?random=1" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
            
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}></Col>
                
            </Row>
            
        </Container>

    );
}

export default Profile;