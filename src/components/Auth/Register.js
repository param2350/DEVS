import React, { Component } from "react";
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import firebase from '../../firebase';

import "./Register.css"
class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''

  }


  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    firebase.auth()
    .createUserWithEmailAndPassord(this.state.email, this.state.password)
      .then(createdUser => {
        console.log(createdUser);
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    const {username, email, password, passwordConfirmation} = this.state;

    return (

      

      <Grid textAlign="center"  verticalAlign="middle" className="app" >
        <Grid.Column style={{maxWidth: 450 }} >
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="houzz" color="orange" />
              Register for Devs
          </Header>
          <Form size="large" className="RegisterForm" onSubmit={this.handleSubmit}>
            <Segment raised>
              <Form.Input fluid name="username" icon="user" iconPosition="left"
                placeholder="Username" onChange={this.handleChange} type="text" value={username}
              />

              <Form.Input  fluid name="email" icon="mail" iconPosition="left"
                placeholder="Email Address" on onChange={this.handleChange} type="email" value={email}
              />

              <Form.Input fluid name="password" icon="lock" iconPosition="left"
                placeholder="Password" onChange={this.handleChange} type="password" value={password}
              />

              <Form.Input fluid name="passwordConfirmation" icon="lock" iconPosition="left"
                placeholder="Password Confirmation" onChange={this.handleChange} type="password" value={passwordConfirmation}
              />

              <Button color="orange"  size="large">Submit</Button>
            </Segment>            
          </Form>
          <Segment raised>
          <Message raised >Already a user? <Link to="/login">Login</Link></Message>
          </Segment>
          
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
