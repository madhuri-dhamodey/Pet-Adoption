import React, { Component } from 'react';
import SignUp from './SignUp';
import ShowDetail from './ShowDetail';

export class HandleSignUp extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    city: '',
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, city } = this.state;
    const values = { firstName, lastName, email, city };

    switch (step) {
      case 1:
        return (
          <SignUp
            handleChange={this.handleChange}
            values={values}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <ShowDetail
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      default:
        console.log('This is a multi-step form built with React.');
    }
  }
}

export default HandleSignUp;
