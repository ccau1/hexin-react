import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FirestoreProvider as Provider } from "react-firestore";
import firebase from "@firebase/app";
import { auth } from "../Services/firebase";
import { AccountActions } from "../Redux/Account/actions";

class FirestoreProvider extends React.Component {
  componentDidMount() {
    const { setUser } = this.props;
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser({
          id: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          displayName: user.displayName,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          phoneNumber: user.phoneNumber
        });
      } else {
        setUser(null);
      }
    });
  }
  render() {
    const { children } = this.props;
    return <Provider firebase={firebase}>{children}</Provider>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setUser: AccountActions.setUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FirestoreProvider);
