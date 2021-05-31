import React from 'react';
import {Container} from 'reactstrap';
import CreateStore from '../../modals/CreateStore'

const NewStore = (props) => {
    const { token, fetcher } = props;

    return(
        <Container>
            <h1>Uh Oh!</h1>
            <h3>Looks like you don't have a store.</h3>
            <h5>Don't worry. Agora makes it easy to sell your own goods.</h5>
            <h5>Click the "Create Store" button below to get started!</h5>
            <CreateStore buttonLabel="Create Store" className="createStore" token = {token} fetcher={fetcher} />
        </Container>
    )
};

export default NewStore;