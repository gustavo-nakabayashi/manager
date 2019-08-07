import React, { Component } from "react";
import Input from "./common/Input";
import CardSection from "./common/CardSection";
import { Picker, View } from "react-native";
import styled from "styled-components";
import { employeeUpdate } from "../actions";
import { connect } from "react-redux";

const PickerLabel = styled.Text`
  font-size: 18px;
  padding-left: 20px;
`;

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeHolder="John"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeHolder="9999-9999"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column", height: 100 }}>
          <PickerLabel>Shift</PickerLabel>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
