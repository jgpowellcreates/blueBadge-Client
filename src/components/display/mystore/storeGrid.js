import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import EditProduct from '../../modals/EditProduct';
import DeleteProduct from '../../modals/DeleteProduct';
import noPic from '../../../assets/no_product_img.jpeg'
import './mystore.css';

const StoreGrid = (props) => {

    const {
        fetcher,
        products
        } = props;

    let storeItems = '';

    if (products) {
        storeItems = products.length;
    } else {
        storeItems = 0;
    }

    const populateStore = () => {
        return (products.map((item, index) => {
            let productImg;
            if (item.imageURL === null) {   //before mapping out the item, I check if it has a picture assigned. If not, I give it a "no product" img
                productImg = noPic
            } else {
                productImg = item.imageURL
            }

            return(
            <div style={{width: "320px", margin: "1em 0.3em"}}>
            <Card key={index} >  {/* className="w-25" */}
                <CardImg className = "cardImage" top width="30%"
                    src={productImg}
                    alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{item.productName}</CardTitle>
                    <CardText>{item.description}</CardText>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{item.description}</CardSubtitle> */}
                    <CardSubtitle tag="h6" className="mb-2 text-muted">${item.price}<br /><br />{item.stock} in Stock</CardSubtitle>
                </CardBody>
                <div className="d-flex flex-row flex-wrap">
                    <EditProduct buttonLabel="Edit" className="editProduct" productId={item.id} fetcher={fetcher} />
                    <DeleteProduct buttonLabel= "Delete" class="editProduct" productId={item.id} productName={item.productName} fetcher={fetcher} />
                </div>
            </Card>
            </div>
            )
        }))
    }

    return (
        <>
            <div className="cardDisplay">
                {storeItems >= 1 ? populateStore() : <h4>You Don't Have Any Items Listed</h4>}
            </div>
        </>
    );
}

export default StoreGrid;