import React, { Component } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import Card from "./common/Card";
import Spinner from "./common/Spinner";
import CardSection from "./common/CardSection";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import styled from "styled-components";
import { View } from "react-native";

const ErrorText = styled.Text`
  color: red;
  align-self: center;
  font-size: 20px;
`;

export class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    console.log(email);
    this.props.loginUser({ email, password });
  };

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <ErrorText>{this.props.error}</ErrorText>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onButtonPress}> Login</Button>;
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeHolder="email.@email.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeHolder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
