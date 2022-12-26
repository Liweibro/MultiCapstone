import { Container,Button, Card ,Row, Col  } from 'react-bootstrap'
import logo from '../logo.svg'
import self from '../0816018.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiChat } from "react-icons/hi";
import { BiChevronLeftCircle } from "react-icons/bi";
import { BiSearch, BiCart, BiUser, BiGroup, BiHomeAlt } from "react-icons/bi";
import './Profile.css'
import { Link } from "react-router-dom";

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
        <>
        <Container className='wrapper_container'>
            <Row>
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
                            <div>good morning everyone my name is li wei bro</div>
                            
                            <div>
                                <HiChat style={{width:20}}/> 100
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </Row>
            <Row style={{"height":300}}></Row>
            {/*<Row>
                <Col xs={1}></Col>
                <Col xs={6}>
                    good morning everyone my name is li wei bro
                </Col>
                 
            </Row>*/}
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
                            <Card.Title>123</Card.Title>
                            <Card.Text>
                            123
                            </Card.Text>
            
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}></Col>
                
            </Row>
            
        </Container>
        
        <div className='navbar_container'>
            <div className='search'>
                <span className = "nav_icon"> <BiSearch/> </span>
                <br/>
                <span className = "nav_text">Search</span>
            </div>

            <Link to='/joinorder'>
                <div className='together'>
                <span className = "nav_icon"> <BiGroup/> </span>
                <br/>
                <span className="nav_text">Together</span>
                </div>
            </Link>

            <Link to={'/MultiCapstone'}>
                <div className='home'>
                <span className = "nav_icon"> <BiHomeAlt/> </span>
                <br/>
                <span className="nav_text">Home</span>
                </div>
            </Link>

            <Link to="/myorder" state={{ uid:"告白校花" }}>
                <div className='order'>
                <span className = "nav_icon"> <BiCart/> </span>
                <br/>
                <span className="nav_text">Order</span>
                </div>
            </Link>

            <Link to ='/profile'>
                <div className='account'>
                <span className = "nav_icon"> <BiUser/> </span>
                <br/>
                <span className="nav_text">Account</span>
                </div>
            </Link>
        </div>
        </>
    );
}

export default Profile;