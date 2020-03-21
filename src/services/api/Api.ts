import app from "firebase/app";
import "firebase/firestore";

import { Todo } from 'features/todoList/view/containers/TodoList/TodoList';

app.initializeApp({
  apiKey: "AIzaSyBKk9fwz4vQlwIYpakZuXL4MV7llHtKRwE",
  authDomain: "frol-todo.firebaseapp.com",
  databaseURL: "https://frol-todo.firebaseio.com",
  projectId: "frol-todo",
  storageBucket: "frol-todo.appspot.com",
  messagingSenderId: "78939945334",
  appId: "1:78939945334:web:fc635634ed57b844d6a257"
});

const db = app.firestore();

class Api {
  public async loadTodoList() {
    let todoList: Todo[] = [];
    await db.collection("todoList").get().then((querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        todoList.push(doc.data())
      });
    });
    return todoList;
  }

  public async getTodo(payload: number) {
    let todo: Todo | null = null;
    await db.collection("todoList").get().then((querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        if (doc.data().id === payload) todo = doc.data();
      });
    });
    return todo;
  }

  public async changeStatusTodo(todo: Todo) {
    await db.collection("todoList").doc(`${todo.id}`).set({
      ...todo,
      isCompleted: !todo.isCompleted,
    });
  }

  public async addTodo(payload: Todo) {
    db.collection("todoList").doc(`${payload.id}`).set({
      ...payload,
    });
  }

  public async removeTodo(payload: number) {
    db.collection("todoList").doc(`${payload}`).delete();
  }

  public async changeTodo(payload: Pick<Todo, 'id' | 'value'>, todo: Todo) {
    db.collection("todoList").doc(`${payload.id}`).set({
      ...todo,
      value: payload.value,
    });
  }
}

export { Api };
