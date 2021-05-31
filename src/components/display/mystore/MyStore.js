import React, { useState, useEffect } from 'react';
import NewStore from './NewStore';
import ExistingStore from './ExistingStore';
import StoreGrid from './storeGrid';

function MyStore(props) {
    const {token} = props;

    const [hasStore, setHasStore] = useState(false);
    const [storeID, setStoreID] = useState('');
    const [storeName, setStoreName] = useState('');
    const [storeLocation, setStoreLocation] = useState('');
    const [storeDescription, setStoreDescription] = useState('');
    const [products, setProducts] = useState([]);
    const [userOnPage, setUserOnPage] = useState('');

    const fetcher = () => {
        try {
            fetch(`${process.env.REACT_APP_API_URL}/store/mystore`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
            })
                .then((response) => response.json())
                .then((data) => {  
                    if (data.storeId === undefined) {return setHasStore(false)} else {
                    return (setProducts(data.products),
                        setHasStore(true),
                        setUserOnPage(data.userId),
                        setStoreID(data.storeId),
                        setStoreName(data.storeName),
                        setStoreLocation(data.storeLocation),
                        setStoreDescription(data.storeDescription))
                    }
                })
                .catch((err) => {           
                    console.log("This is caught with error", err);
                    setHasStore(false);
                })
        } catch(err) {
            setHasStore(false);
            console.log("Error was caught:", err)
        }
    }

    useEffect(() => {
        fetcher()
    }, [token] );

    // function checkStates() {
    //     console.log("Has Store:", hasStore); 
    //     console.log("Products:", products);
    //     console.log("Store Number:", storeID);
    //     console.log("UserId:", userOnPage);
    //     console.log("Token:", token)
    // }

    return(
        <>
            {/* <button onClick={fetcher}>RUN FETCH</button>
            <button onClick={checkStates}>CHECK STATES</button> */}
            {hasStore ? <ExistingStore token={token} fetcher={fetcher} storeID={storeID} storeName={storeName} storeLocation={storeLocation} storeDescription={storeDescription} />
                      : <NewStore token={token} fetcher={fetcher}/>}
            {hasStore ? <StoreGrid fetcher={fetcher} products={products}  /> : <></>}
        </>
    );
}

export default MyStore;