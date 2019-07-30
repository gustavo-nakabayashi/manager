import React, { Component } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import Card from "./common/Card";
import CardSection from "./common/CardSection";

export class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeHolder="email.@email.com" />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeHolder="password" />
        </CardSection>
        <CardSection>
          <Button> Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
