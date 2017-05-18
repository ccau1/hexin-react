import styled from 'styled-components';

export default styled.a`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: #03A9F4;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  padding: 13px;
  box-sizing: border-box;
  color: white;
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  box-shadow: 0 5px 6px 0 rgba(0,0,0,0.2);


  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, .3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width .2s ease-out, padding-top .2s ease-out;
  }
`;
