import React from 'react';
import styled from 'styled-components';

export const DefaultButton = styled.button`
  position: relative;
  padding: 10px;
  min-width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props =>
    props.active ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};
  &:focus {
    outline: 0;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover:after {
    background-color: rgba(255, 255, 255, 0.05);
  }
  &:disabled {
    cursor: default;
    border-color: rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
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
  &:disabled {
    cursor: default;
    border-color: ${props => props.theme.color.secondaryDisabled};
    background-color: ${props => props.theme.color.secondaryDisabled};
  }
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
  &:disabled {
    cursor: default;
    border-color: ${props => props.theme.color.primaryDisabled};
    background-color: ${props => props.theme.color.primaryDisabled};
  }
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
