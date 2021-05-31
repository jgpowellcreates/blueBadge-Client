import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import AddProduct from '../../modals/AddProduct';
import EditStore from '../../modals/EditStore';
import DeleteStore from '../../modals/DeleteStore'


const ExistingStore = (props) => {
    const {token,
        storeID,
        fetcher,
        storeName,
        storeLocation,
        storeDescription
    } = props;

    return (
        <Container>
            <h1>{storeName}</h1>
                <Row style={{padding: "1em 0"}}>
                    <Col m="8">
                        <h4 style={{textAlign: "left"}}>{storeLocation}</h4>
                        <h5 style={{textAlign: "left"}}>{storeDescription}</h5>
                    </Col>
                    <Col xs="4" style={{}}>
                        <AddProduct buttonLabel="Add Product" className="addProduct"
                            token = {token} storeID={storeID} fetcher={fetcher} />
                        <EditStore buttonLabel="Edit Store" className="editStore"
                            token={token} storeID={storeID} fetcher={fetcher} />
                        <DeleteStore buttonLabel="Delete Store" className="deleteStore"
                            token={token} storeID={storeID} storeName={storeName} fetcher={fetcher} />
                    </Col>
                </Row>
        </Container>
    )
};

export default ExistingStore;