import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import '../static/css/contact.style.css';

const ContactModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log(data);
    handleClose();
  }

  return (
    <>
      <button className="contact-button" onClick={handleShow}>Say Hi!</button>

      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title className='modal-title'>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Form className='modal-form' onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className='mb-2'>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className='mb-2'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className='mb-2'>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" placeholder="Enter your message" rows={4}/>
            </Form.Group>

            <button className="contact-button float-end" type="submit">
              Send Message
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactModal;