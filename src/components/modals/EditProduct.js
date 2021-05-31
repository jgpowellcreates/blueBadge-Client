import React, { useState } from 'react';
import {
  Button, Modal, ModalBody, Form, FormGroup,
  Label, Input
} from 'reactstrap';

const EditProduct = (props) => {
  const {
    buttonLabel,
    className,
    fetcher,
    productId,
    token
  } = props;

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [imageURL, setImageURL] = useState('');


  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/product/${productId}`, { 
      method: 'PUT',
      body: JSON.stringify({ productName, price, description, stock, imageURL }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        fetcher();
      })
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button id = "mainButton" size="sm" onClick={toggle}>{buttonLabel}</Button>
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
            <FormGroup>
              <Label htmlFor='imageURL'>Image URL</Label>
              <Input name='imageURL' value={imageURL}
                onChange={(e) => setImageURL(e.target.value)} />
            </FormGroup>
            <Button type="submit" color="primary" onClick={toggle}>Confirm changes</Button>{' '}
            <Button id = "importantButton" onClick={toggle}>Cancel</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EditProduct;