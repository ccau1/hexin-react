import React from 'react';
// import styled from 'styled-components';
import {FlatButton, RaisedButton} from 'material-ui';


export const Default = ({children, ...props}: Object) => {
  return (
    <RaisedButton {...props}>
      {children}
    </RaisedButton>
  );
};

export const Primary = ({children, ...props}: Object) => {
  return (
    <RaisedButton primary={true} {...props}>
      {children}
    </RaisedButton>
  );
};

export const Secondary = ({children, ...props}: Object) => {
  return (
    <RaisedButton secondary={true} {...props}>
      {children}
    </RaisedButton>
  );
};

export const Link = ({children, ...props}: Object) => {
  return (
    <FlatButton {...props}>
      {children}
    </FlatButton>
  );
};

export default Default;



// export const Button = styled.button`
//   position: relative;

//   display: inline-block;
//   padding: 0;

//   overflow: hidden;

//   border-width: 0;
//   outline: none;
//   border-radius: 2px;
//   box-shadow: 0 1px 4px rgba(0, 0, 0, .6);

//   background-color: #737373;
//   color: #ecf0f1;

//   transition: background-color .3s;
//   padding: 12px 24px;
//   cursor: pointer;

//   &:hover, &:focus {
//     background-color: #949494;
//   }

//   &[disabled] {
//     cursor: default;
//     background-color: #cecece;
//     box-shadow: none;
//   }

//   &:before {
//     content: "";

//     position: absolute;
//     top: 50%;
//     left: 50%;

//     display: block;
//     width: 0;
//     padding-top: 0;

//     border-radius: 100%;

//     background-color: rgba(236, 240, 241, .3);

//     -webkit-transform: translate(-50%, -50%);
//     -moz-transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     -o-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//   }
//   &:active:before {
//     width: 120%;
//     padding-top: 120%;

//     transition: width .2s ease-out, padding-top .2s ease-out;
//   }
// `;

// export const Default = Button;

// export const Primary = styled(Button)`
//   background-color: #2ecc71;
//   &:hover, &:focus {
//     background-color: #27ae60;
//   }

//   &[disabled] {
//     background-color: #7fe0a8;
//   }
// `;

// export const Secondary = styled(Button)`
//   background-color: #e67e22;
//   &:hover, &:focus {
//     background-color: #d35400;
//   }

//   &[disabled] {
//     background-color: #e6b487;
//   }
// `;

// export const Link = styled(Button)`
//   background-color: transparent;
//   color: #1f7ade;
//   box-shadow: none;
//   &:hover, &:focus {
//     background-color: transparent;
//     color: #62abfb;
//   }

//   &[disabled] {
//     background-color: transparent;
//     color: #a0c5ef;
//   }
// `;

// export default Button;
