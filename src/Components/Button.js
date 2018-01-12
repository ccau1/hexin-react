import React from "react";
import styled from "styled-components";

export const DefaultButton = styled.button`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${props =>
    props.active ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)"};
  &:focus {
    outline: 0;
  }
`;
export const SecondaryButton = styled(DefaultButton)`
  background-color: ${props =>
    props.active
      ? props.theme.color.secondaryHighlight
      : props.theme.color.secondary};
  color: ${props =>
    props.active
      ? props.theme.color.secondaryHighlightText
      : props.theme.color.secondaryText};
`;
export const PrimaryButton = styled(DefaultButton)`
  background-color: ${props =>
    props.active
      ? props.theme.color.primaryHighlight
      : props.theme.color.primary};
  color: ${props =>
    props.active
      ? props.theme.color.primaryHighlightText
      : props.theme.color.primaryText};
`;

const Button = ({ primary, secondary, ...rest }) => {
  if (primary) {
    return <PrimaryButton {...rest} />;
  }
  if (secondary) {
    return <SecondaryButton {...rest} />;
  }
  return <DefaultButton {...rest} />;
};

Button.Primary = PrimaryButton;
Button.Secondary = SecondaryButton;
Button.Default = DefaultButton;

export default Button;
