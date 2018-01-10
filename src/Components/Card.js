import styled from "styled-components";
import NavBar from "./NavBar";

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: ${props => props.theme.color.contentBackground};
  margin: 0 -1px -1px 0;
`;

Card.Title = NavBar.extend`
  margin: ${props => "-" + props.theme.screenPadding + "px"};
  margin-bottom: 0;
  margin-top: ${props =>
    props.top ? "-" + props.theme.screenPadding + "px" : 0};
`;

// TODO:: this does not handle top margin. if item is Card's first child, it'll have extra padding at top.
// handle margin-top depending on if first child or not
Card.Image = styled.div`
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
  margin: ${props => "-" + props.theme.screenPadding + "px"};
  margin-bottom: 0;
  margin-top: ${props =>
    props.top ? "-" + props.theme.screenPadding + "px" : 0};
  height: 200px;
`;

export default Card;
