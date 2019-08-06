import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const WrapperView = styled.View`
  display: flex;
  border-bottom-width: 1;
  padding: 5px;
  background-color: #fff;
  justify-content: flex-start;
  flex-direction: row;
  border-color: #ddd;
  position: relative;
`;

const CardSection = props => {
  return <WrapperView style={props.style}>{props.children}</WrapperView>;
};

export default CardSection;
