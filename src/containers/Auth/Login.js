import React from 'react';
import {Container, Form} from "react-bootstrap";
import SubmitButton from '../UI/Button';
import Emailform from '../UI/EmailForm';
import Passwordform from '../UI/PasswordForm';

const Login = () => {
  return (
        <Container >
            <Form >
              <Emailform/>
              <Passwordform/>
              <SubmitButton/>
            </Form>
        </Container>
  )
}

export default Login