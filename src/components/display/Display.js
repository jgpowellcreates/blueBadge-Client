import React from 'react';
import Market from './market/Market';
import MyStore from './mystore/MyStore';

function Display(props) {
    const {
        isMarket,
        isMyStore,
        updateToken,
        token
    } = props;

    return(
        <div className = "display">
            {isMarket
                ? <Market updateToken = {updateToken} token = {token}/>
            : isMyStore
                ? <MyStore token = {token}/>
                : <></>}
        </div>
    );
}

export default Display;