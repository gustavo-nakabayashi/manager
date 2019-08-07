import React from "react";
import { Text, View, Modal } from "react-native";
import CardSection from "./CardSection";
import Button from "./Button";
import styled from "styled-components";

const StyledText = styled.Text`
  flex: 1;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
`;

const StyledView = styled.View`
  background-color: rgba(0, 0, 0, 0.75);
  flex: 1;
  padding-top: 250px;
  /* margin-top: 250px; */
`;

Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      transparent
      animationType="slide"
      onRequestClose={() => {}}
      visible={visible}
    >
      <StyledView>
        <CardSection style={{ justifyContent: "center" }}>
          <StyledText>{children}</StyledText>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </StyledView>
    </Modal>
  );
};

export default Confirm;
