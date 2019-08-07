import _ from "lodash";
import React, { Component } from "react";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Button from "./common/Button";
import Confirm from "./common/Confirm";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import { connect } from "react-redux";
import Communications from "react-native-communications";
export class EmployeeEdit extends Component {
  state = { showModal: false };

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
    // this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  onAccept = () => {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  };
  onDecline = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>Save</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire!!!!!
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
