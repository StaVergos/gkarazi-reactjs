import React from 'react';
import {Form} from 'react-bootstrap';

const Emailform = () => (
    <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
);

export default Emailform;