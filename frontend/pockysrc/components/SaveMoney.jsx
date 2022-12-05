import React, {useState} from 'react';
import './SaveMoney.css';
import { 
    Button, 
    Modal,} from 'react-bootstrap';

function MydModalWithGrid(props) {
    return (
        <Modal 
          {...props} 
          dialogClassName="modal-width"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                餘額不足！<br></br>
                快點去存錢嘍！
            </Modal.Body>
            <Modal.Footer style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
            >
                <Button onClick={props.onHide} id="btn-second"
                >前往錢包</Button>
            </Modal.Footer>
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

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Example;