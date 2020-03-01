import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { TodoComponent } from '../../components';

import './TodoList.scss';
import { connect } from 'react-redux';
import { actionCreators, selectors } from 'features/todoList/redux';
import { IAppReduxState } from 'shared/types/app';

const b = block('todo-list');

type State = {
  todoList?: Todo[],
  newTodoText?: string,
};

type IStateProps = any

export type Todo = {
  id: number,
  value: string,
  isCompleted: boolean,
};

const mapDispatch = {
  addTodo: actionCreators.addTodo,
  changeStatusTodo: actionCreators.changeStatusTodo,
  changeTodo: actionCreators.changeTodo,
  removeTodo: actionCreators.removeTodo,
};

function mapState(state: IAppReduxState): IStateProps {
  return {
    stateTodoList: selectors.selectTodoList(state),
  };
}

class TodoListComponent extends React.Component<IStateProps, State> {
  public state: State = {
    todoList: this.props.stateTodoList,
    newTodoText: '',
  };

  public render() {
    const { todoList } = this.state;
    return (
      <div className={b()}>
        <h1 className={b('header')}>TODO LIST</h1>
        <div className={b('new-todo')} >
          <input type="text" className={b('input')} onChange={this.handleInputChange} value={this.state.newTodoText} />
          <button className={b('add-todo')} onClick={this.handleAddTodoClick}>Add Todo</button>
        </div>
        <div>
          {todoList && todoList.map(todo => (
            <TodoComponent
              key={todo.id}
              todo={todo}
              onStatusChange={this.handleTodoStatusChange}
              onChange={this.handleTodoChange}
              onRemove={this.handleTodoRemove}
            />
          ))}
        </div>
      </div>
    );
  }

  @autobind
  private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ newTodoText: event.target.value });
  };

  @autobind
  private handleAddTodoClick() {
    const { addTodo } = this.props;
    const { newTodoText, todoList } = this.state;
    if (newTodoText && newTodoText.length > 0) {
      const newTodo = {
        id: todoList && todoList[todoList.length - 1].id || 0,
        value: newTodoText,
        isCompleted: false,
      }
      this.setState((prevState: State) => ({
        todoList: [
          ...prevState.todoList,
          newTodo,
        ],
        newTodoText: '',
      }))
      this.state.todoList && addTodo(newTodo);
    }
  }

  @autobind
  private handleTodoStatusChange(todoId: number) {
    const { changeStatusTodo } = this.props;
    const { todoList } = this.state;
    const newTodoList = todoList && todoList.map(todo => {
      if (todo.id === todoId) return { ...todo, isCompleted: !todo.isCompleted };
      return todo;
    });
    this.setState({ todoList: newTodoList });
    changeStatusTodo();
  }

  @autobind
  private handleTodoChange(todoId: number, todoValue: string) {
    const { changeTodo } = this.props;
    const { todoList } = this.state;
    const newTodoList = todoList && todoList.map(todo => {
      if (todo.id === todoId) return { ...todo, value: todoValue };
      return todo;
    });
    this.setState({ todoList: newTodoList });
    changeTodo();
  }

  @autobind
  private handleTodoRemove(itemId: number) {
    const { removeTodo } = this.props;
    this.setState((prevState: State) => ({
      todoList: prevState.todoList && prevState.todoList.filter(todo => todo.id !== itemId)
    }))
    removeTodo();
  }
}

const connectedComponent = connect(mapState, mapDispatch)(TodoListComponent);

export { connectedComponent as TodoList };
