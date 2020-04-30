import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function MyModal({ isAlreadySearched }) {
    const [show, setShow] = useState(true);
    const handleClose = (e) => {
        e.preventDefault();
        setShow(false);
    };
    let messageOne = "Something went wrong...";
    let messageTwo = "Be sure that you entered a valid city name!";
    if (isAlreadySearched) {
        messageOne = "Duplicate Search...";
        messageTwo = "This city was already searched!";
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Opppssss</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{messageOne}</h5> <p>{messageTwo}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MyModal;
