import React, { useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Auth(props) {

  const { buttonLabel, Login, updateToken, clearToken } = props;

  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);
  const [signUp, setSignUp] = useState(true);

  const toggle = () => {
    setModal(!modal);
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/user/register`, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName

      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        updateToken(data.token);
      })

    toggle();
  }
  const handleLogin = (e) => {
    console.log("I'm trying to log in")
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        updateToken(data.token);
      })

    toggle();
  }

  return (

    <div>
      <Button id = "mainButton" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={Login}>
        <ModalHeader>
          {login
            ? <Button id = "importantButton" onClick={() => setLogin(!login)}>Register</Button>
            : <Button id = "importantButton" onClick={() => setLogin(!login)}>Login</Button>
          }

        </ModalHeader>
        {login ?
          <div>

            <ModalBody>
              <Form onSubmit={handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">Username:</Label>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password:</Label>
                  <br />
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button id = "mainButton" type="submit">
                  Login
            </Button>{" "}
                <Button id = "importantButton" onClick={toggle}>
                  Cancel
            </Button>
              </Form>
            </ModalBody>
          </div>

          : signUp ?


            <div>
              <ModalBody>
                <Form onSubmit={handleSignUp}>
                  <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="firstName">First Name:</Label>
                    <br />
                    <Input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="lastName">Last Name:</Label>
                    <br />
                    <Input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="username">Username:</Label>
                    <Input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <br />
                    <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <Button id = "mainButton" type="submit">
                    Signup
            </Button>{" "}
                  <Button id = "importantButton" onClick={toggle}>
                    Cancel
            </Button>
                </Form>
              </ModalBody>
            </div>

            : <> </>
        }
      </Modal>
    </div>

  )
}

export default Auth;