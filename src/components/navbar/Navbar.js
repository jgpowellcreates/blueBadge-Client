import React from 'react';
import { Button } from 'reactstrap';
import ShoppingCart from '../shoppingcart/ShoppingCart';
import Auth from '../modals/Auth';

function Navbar(props) {

    const {
        setIsMarket,
        setIsMyStore,
        updateToken,
        clearToken,
        token
    } = props;

    const loadMarket = (e) => {
        setIsMarket(true);
        setIsMyStore(false);
    }

    const loadMyStore = (e) => {
        setIsMarket(false);
        setIsMyStore(true);
    }

    return(
        <div className = "navbar">
            {token
                ? <Button id="mainButton" onClick={clearToken}>Logout</Button>
                : <Auth buttonLabel = {"Login / Signup"} className = {"Login"} updateToken={updateToken} clearToken={clearToken} />
            }
            <Button id = "mainButton" onClick = {loadMarket}>Market</Button>
            {token ? <Button id = "mainButton" onClick = {loadMyStore}>My Store</Button> : <></>}
            {token ? <ShoppingCart buttonLabel = {"Cart"} className = {"shoppingCart"} token = {token}/> : <></>}
        </div>
    );
}

export default Navbar;