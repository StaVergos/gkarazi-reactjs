import React from 'react';
import {Container, Form} from "react-bootstrap";
import SubmitButton from '../containers/UI/Button';
import Emailform from '../containers/UI/EmailForm';

const Login = () => {
  return (
        <Container >
            <Form>
              <Emailform/>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <SubmitButton/>
            </Form>
        </Container>
  )
}

export default Login