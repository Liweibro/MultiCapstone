import React, {useState} from 'react';
import './SaveMoney.css';
import { 
    Button, 
    Modal,} from 'react-bootstrap';

function MydModal(props) {
    return (
        <Modal 
          {...props} 
          dialogClassName="modal-width"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                訂單已發起！<br></br>
                請前往「我的訂單」查看詳細資訊！
            </Modal.Body>
            <Modal.Footer style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
            >
                <Button onClick={props.onHide} id="btn-second"
                >確認前往</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Example() {
    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        setModalShow(true);
    }

    const hideModal = () => {
        setModalShow(false);
    }

    return (
        <>
        <Button variant="primary" onClick={showModal}>
            Launch modal
        </Button>

        <MydModal show={modalShow} onHide={hideModal} />
        </>
    );
}

export default Example;
