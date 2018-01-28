import styled from "styled-components";
import NavBar from "./NavBar";

const CardSettings = styled.div`
  margin-top: ${props =>
    props.top ? "-" + props.theme.measurements.padding + "px" : 0};
  padding: ${props =>
    props.noPadding ? "0px" : props.theme.measurements.padding + "px"};
`;

const Card = CardSettings.extend`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${props => props.theme.measurements.padding}px;
  background: ${props => props.theme.color.contentBackground};
  margin: 20px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

Card.Title = NavBar.extend`
  margin: ${props => "-" + props.theme.measurements.padding + "px"};
  margin-bottom: 0;
  margin-top: ${props =>
    props.top ? "-" + props.theme.measurements.padding + "px" : 0};
`;
Card.Content = CardSettings.extend`
  margin: ${props => "-" + props.theme.measurements.padding + "px"};
  margin-bottom: 0;
  margin-top: ${props =>
    props.top ? "-" + props.theme.measurements.padding + "px" : 0};
  padding: ${props =>
    props.noPadding ? "0px" : props.theme.measurements.padding + "px"};
  flex: 1;
  overflow-y: auto;
  margin-left: -1;
`;

Card.List = styled.div`
  overflow-y: auto;
  flex: 1;
  ${Card} {
    margin: -1px -1px 0 -1px;
  }
`;

// TODO:: this does not handle top margin. if item is Card's first child, it'll have extra padding at top.
// handle margin-top depending on if first child or not
Card.Image = CardSettings.extend`
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
  margin: ${props => "-" + props.theme.measurements.padding + "px"};
  margin-bottom: 0;
  margin-top: ${props =>
    props.top ? "-" + props.theme.measurements.padding + "px" : 0};
  height: 200px;
`;

export default Card;
