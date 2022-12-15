import React, {useState} from 'react';
import './ChooseID.css';
import { 
    Button, 
    Modal, } from 'react-bootstrap';

function ChooseID(props) {
    return (
        <Modal 
          {...props} 
          dialogClassName="modal-width"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header closeButton />
            <Modal.Body  style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            }}
            >
                <div className='a'>請選擇你的身分</div>
                <div>
                <Button onClick={props.onHide} className="btn-second">發起訂單</Button>
                </div>
                <div><Button onClick={props.onHide} className="btn-second">參與訂單</Button>
                </div>
            </Modal.Body>
            <Modal.Footer/>
        </Modal>
    );
}

function Example() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <ChooseID show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Example;