import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form} from 'reactstrap';

const DeleteProduct = (props) => {
  const {
    buttonLabel,
    className,
    fetcher,
    productId,
    productName,
    token
  } = props;


  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/product/${productId}`, { 
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        fetcher();
        toggle();
      })
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button id = "mainButton" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Delete {productName}?</ModalHeader>
        <ModalBody>
            <Form>
                <Button type="submit" id = "mainButton" onClick={handleSubmit}>Delete Product</Button>
                <Button id = "importantButton" onClick={toggle} >Cancel Action</Button>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default DeleteProduct;