import React, { useState } from 'react';
import {
  Button, Modal, ModalBody, Form, FormGroup,
  Label, Input
} from 'reactstrap';

function AddProduct(props) {

  const {
    buttonLabel,
    className,
    token,
    storeID,
    fetcher
  } = props;

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');

  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/product/create/${storeID}`, {
      method: 'POST',
      body: JSON.stringify({ productName, price, description, stock}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => {
        console.log("Store Number:",storeID)
        console.log("Token:", token)
        return res.json()})
      .then((logData) => {
        console.log(logData);
        fetcher();
        toggle();
      })
      .catch((err) => console.log(err))
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button id = "mainButton" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='productName'>Product Name</Label>
              <Input name='productName' value={productName}
                onChange={(e) => setProductName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='price'>Price</Label>
              <Input name='price' value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='description'>Description</Label>
              <Input type="textarea" name='description' value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='stock'>Stock</Label>
              <Input name='stock' value={stock}
                onChange={(e) => setStock(e.target.value)} />
            </FormGroup>
            <Button type="submit" id = "mainButton" onClick={handleSubmit}>Post listing</Button>{' '}
            <Button id = "importantButton" onClick={toggle}>Cancel</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddProduct;