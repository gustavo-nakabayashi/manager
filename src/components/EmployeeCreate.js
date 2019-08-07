import React, { Component } from "react";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Button from "./common/Button";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate, employeeClear } from "../actions";
import EmployeeForm from "./EmployeeForm";

export class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  };

  componentWillMount() {
    this.props.employeeClear();
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
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
  { employeeUpdate, employeeCreate, employeeClear }
)(EmployeeCreate);
