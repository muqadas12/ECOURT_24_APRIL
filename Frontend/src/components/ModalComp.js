import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
    
function ModalComp() {
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  return (
    <div className="container">
      <h1>React Bootstrap Modal Example - ItSolutionStuff.com</h1>
   
      
   
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>React Bootstrap Modal Example - ItSolutionStuff.com</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          laborum.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save It!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
   
export default ModalComp;