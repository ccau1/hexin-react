import styled from 'styled-components';

const color = '#1abc9c';

export default styled.input`
  margin: 40px 25px;
  display: block;
  border: none;
  padding: 10px 0;
  border-bottom: solid 1px ${color};
  transition: all 0.3s cubic-bezier(.64,.09,.08,1);
  background: linear-gradient(to bottom, rgba(255,255,255,0) 96%, ${color} 4%);
  background-position: -200px 0;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  color: #000;

  &::-webkit-input-placeholder {
    font-family: 'roboto', sans-serif;
    transition: all 0.3s ease-in-out;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: ${color};
      font-size: 11px;
      transform: translateY(-20px);
      visibility: visible !important;
    }
  }
`;
