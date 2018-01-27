import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FirestoreProvider as Provider } from "react-firestore";
import firebase from "@firebase/app";
import { AccountActions } from "../Redux/Account/actions";

class FirestoreProvider extends React.Component {
  componentDidMount() {}
  render() {
    const { children } = this.props;
    return <Provider firebase={firebase}>{children}</Provider>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setUser: AccountActions.setUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FirestoreProvider);
