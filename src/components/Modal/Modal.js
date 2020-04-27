import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function MyModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Opppssss</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Something went wrong...</h5>{" "}
                    <p>Be sure that you entered a valid city name!</p>
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
