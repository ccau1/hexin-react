import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div``;

const Input = styled.input`
  height: 42px;
  padding: 6px 10px;
  cursor: text;
  text-align: left;
  font-size: 13px;
  line-height: 1.5;
  color: #595959;
  background-color: #fff;
  background-image: none;
  border: 1px solid #e9e9e9;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-transition: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  -moz-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  -ms-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  -o-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  -webkit-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
`;

export default class TextInput extends React.Component {
  static defaultProps = {
    onChange: () => true
  };
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        text: nextProps.value
      });
    }
  }

  onChange = ev => {
    const { onChange } = this.props;
    const value = ev.target.value;
    onChange(value);
    this.setState({
      text: value
    });
  };

  render() {
    const { onChange } = this;
    const { text } = this.state;
    return (
      <InputContainer>
        <Input {...this.props} value={text} onChange={onChange} />
      </InputContainer>
    );
  }
}
