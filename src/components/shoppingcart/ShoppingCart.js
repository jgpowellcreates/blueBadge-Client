import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ShoppingCart(props) {
  const { buttonLabel, token } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  async function fetchShoppingCart(e) {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/user/returnshoppingcart/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((data) => setShoppingCart(data.shoppingCartArray))

    toggle();
  }

  useEffect(() => {
    setProductsArray([])
    shoppingCart.map(productID => {
      fetch(`${process.env.REACT_APP_API_URL}/product/${productID}`)
        .then((res) => res.json())
        .then((data) => setProductsArray(productsArray => [...productsArray, data[0]]))
    })
  }, [shoppingCart])
  

  function mappingCart() {
   
    return (productsArray.map((sci, index) => {
      return (
        <div key={index}>
          <h3>{sci.productName}</h3>
          <img src={sci.imageURL} width="100" alt = "productImage" />
          <h5>Price: ${sci.price}</h5>
        </div>
      ) 
    } 
    ))
  }
  



  const checkOut = () => {
    fetch(`${process.env.REACT_APP_API_URL}/user/checkout/`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toggle();
    alert("Thank you for shopping with Agora!")

  }

  return (
    <div>
      <Button id = "mainButton" onClick={fetchShoppingCart}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={ShoppingCart}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>

          {mappingCart()}

        </ModalBody>
        <ModalFooter>
          <Button onClick={() => checkOut()}>
            Checkout
          </Button>
          <Button id = "importantButton" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ShoppingCart;