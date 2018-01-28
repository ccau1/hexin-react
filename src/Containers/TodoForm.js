import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoFormComp from "../Components/App/TodoForm";
import { db } from "../Services/firebase";
import Collection from "../Constants/Collection";
import Form from "../Constants/Form";
import { reset } from "redux-form";

class TodoForm extends React.Component {
  componentDidMount() {
    this.todos = db.collection(Collection.TODOS);
  }
  render() {
    const { todos } = this;
    const { reset } = this.props;
    return (
      <TodoFormComp
        onSubmit={item => {
          todos.add({ ...item, createdAt: new Date() });
          // TODO:: reset doesn't work. should it be here though?
          reset(Form.TODO);
        }}
      />
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ reset: reset }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
