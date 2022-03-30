import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';


    export function AlertLogin(){
        
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closebutton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
                <button variant="primary" onClick={handleClose}>
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
          </>
        );
}

export default AlertLogin;