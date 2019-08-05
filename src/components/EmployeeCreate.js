import React, { Component } from "react";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Input from "./common/Input";
import Button from "./common/Button";
import { Text, View } from "react-native";
export class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeHolder="John" />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeHolder="9999-9999" />
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
        {/* <CardSection>Olar</CardSection> */}
      </Card>
    );
  }
}

export default EmployeeCreate;
