import React from 'react';
import {connect} from 'react-redux';
import {Container, Form} from "react-bootstrap";
import SubmitButton from '../../components/UI/Button';
import Emailform from '../../components/UI/EmailForm';
import Passwordform from '../../components/UI/PasswordForm';
import * as actions from '../../store/actions/index';

const Login = () => {
  state = {
    controls: {
      email: {
        value: ''
      },
      password: {
        value: ''
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state.controls.email.value, this.state.controls.password.value)
  };

  return (
        <Container >
            <Form onSubmit={this.submitHandler}>
              <Emailform/>
              <Passwordform/>
              <SubmitButton onClick={this.onSubmit}/>
            </Form>
        </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.login())
  }
};

export default connect(null, mapDispatchToProps)(Login);