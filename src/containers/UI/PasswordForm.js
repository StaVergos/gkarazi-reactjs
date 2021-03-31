import React from 'react';
import {Form} from 'react-bootstrap';

const Passwordform = () => (
    <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
);

export default Passwordform;