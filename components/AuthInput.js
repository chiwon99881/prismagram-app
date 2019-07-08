import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const Container = styled.View`
  margin-bottom: 10px;
`;
const TextInput = styled.TextInput`
  background-color: ${props => props.theme.greyColor};
  width: ${constants.width / 2};
  padding: 10px;
  border: 1px solid ${props => props.theme.superLightGreyColor};
  border-radius: 5px;
`;

const AuthInput = ({
  value,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  onChange,
  onEndEditing = () => null,
  autoCorrect = true
}) => {
  return (
    <Container>
      <TextInput
        onChangeText={onChange}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        value={value}
        onEndEditing={onEndEditing}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
      />
    </Container>
  );
};

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad"
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  onChange: PropTypes.func.isRequired,
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  onEndEditing: PropTypes.func,
  autoCorrect: PropTypes.bool
};

export default AuthInput;
