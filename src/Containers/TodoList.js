import React from "react";
import { FirestoreCollection } from "react-firestore";
import Loading from "../Components/Loading";
import TodoList from "../Components/App/TodoList";
import { db } from "../Services/firebase";
import Collection from "../Constants/Collection";

export default props => {
  const todos = db.collection(Collection.TODOS);
  return (
    <FirestoreCollection
      path="todos"
      sort="createdAt:desc,task"
      render={({ isLoading, data }) => {
        return isLoading ? (
          <Loading />
        ) : (
          <TodoList
            todos={data}
            onItemClick={todo =>
              todos.doc(todo.id).update({
                isComplete: !todo.isComplete
              })
            }
            onDeleteClick={todo => todos.doc(todo.id).delete()}
          />
        );
      }}
    />
  );
};
