import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { TodoComponent } from '../../components';

import './TodoList.scss';

const b = block('todo-list');

type State = {
  todoList?: Todo[],
};

type Todo = {
  id: number,
  value: string,
  isCompleted: boolean,
};

const mockState: State = {
  todoList: [
    { id: 0, value: 'go to book', isCompleted: false },
    { id: 1, value: 'read the book', isCompleted: false },
    { id: 2, value: 'read the journal journal journal journal journal journal journal journal journal journal', isCompleted: true },
    { id: 3, value: 'read the news', isCompleted: false },
    { id: 4, value: 'read the apple', isCompleted: false },
    { id: 5, value: 'read the fish', isCompleted: false },
  ],
};

class TodoListComponent extends React.Component<State> {
  public state: State = mockState;

  public render() {
    const { todoList } = this.state;
    return (
      <div className={b()}>
        <h1>TODO_LIST</h1>
        <input type="text" className={b('input')} />
        {todoList && todoList.map(todo => (
          <TodoComponent
            todo={todo}
            onChange={(event: React.MouseEvent<HTMLDivElement>) => this.handleTodoStatusChange(event)}
          />
        ))}
      </div>
    );
  }

  @autobind
  private handleTodoStatusChange(event: React.MouseEvent<HTMLDivElement>) {
    const { todoList } = this.state;
    const todoId = event.currentTarget.id;

    const newTodoList = todoList && todoList.map(todo => {
      if (todo.id === Number(todoId)) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    this.setState({ todoList: newTodoList });
  }
}

export { TodoListComponent as TodoList };

// нужно продумать как изменять состояние каждой тудушки при клике по ней
