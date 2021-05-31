import React from 'react';
import Hero from "./Hero";
import Grid from "./Grid";

function Market(props) {

    const {token} = props;
    
    return(
            <div>
                <Hero updateToken = {props.updateToken} token = {token}/>
                <Grid token = {token} />
            </div>
    );
}

export default Market;