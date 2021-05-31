import React from 'react';
import { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";


function Hero(props) {
    const { updateToken, token } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(
            (response => response.json())
        ).then((data) => {
            updateToken(data.token);
        }).catch((error) => (console.log(error)))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className = "heroTitle">
                        <h1 class="playfair bigHeroFont">Agora Marketplace</h1>
                        <h4>A place for discovery and trade. By creators, for creators!</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className = "parthenon">
                        <img src="https://lh3.googleusercontent.com/proxy/fLW4Tvdy_KghVjHPvzY1WFscrvANboXrmll0j4h1zCLf-rcisCHP3dZAFUGFHM8IhcnJ0Z9j4ryOCiSZAQU2wVXhKJFzzjg" alt ="parthenon"/>
                    </Col>
                    {!token ?
                        <Col className = "inputPadding">
                            <h3>Login</h3>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
                                </FormGroup>
                                <Button type="submit" id="mainButton">Login</Button>
                            </Form>
                        </Col>
                        : <></>}
                </Row>
            </Container>
            <br />
            <br />
        </div>
    );
}

export default Hero;