import _ from "lodash";
import React, { Component } from "react";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Button from "./common/Button";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from "../actions";
import { connect } from "react-redux";

export class EmployeeEdit extends Component {
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
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save</Button>
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
  { employeeUpdate, employeeSave }
)(EmployeeEdit);
