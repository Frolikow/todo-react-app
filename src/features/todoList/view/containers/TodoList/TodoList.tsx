import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { TodoComponent } from '../../components';

import './TodoList.scss';
import { connect } from 'react-redux';
import { actionCreators, selectors } from 'features/todoList/redux';
import { IAppReduxState } from 'shared/types/app';

const b = block('todo-list');

type IActionProps = typeof mapDispatch;

type IProps = IStateProps & IActionProps;

type State = {
  todoList?: Todo[],
  newTodoText: string | null,
};

type IStateProps = {
  todoList?: Todo[],
}

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
    todoList: selectors.selectTodoList(state),
  };
}

class TodoListComponent extends React.Component<IProps, State> {
  public state: State = {
    newTodoText: null,
  };

  public render() {
    const { todoList } = this.props;
    const { newTodoText } = this.state;
    return (
      <div className={b()}>
        <h1 className={b('header')}>TODO LIST</h1>
        <div className={b('new-todo')} >
          <input type="text" className={b('input')} onChange={this.handleInputChange} value={newTodoText ? newTodoText : ''} />
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
    const { newTodoText } = this.state;
    if (newTodoText && newTodoText.length > 0) {
      addTodo(newTodoText);
      this.setState({ newTodoText: '' });
    }
  }

  @autobind
  private handleTodoStatusChange(todoId: number) {
    const { changeStatusTodo } = this.props;
    changeStatusTodo(todoId);
  }

  @autobind
  private handleTodoChange(todoId: number, todoValue: string) {
    const { changeTodo } = this.props;
    changeTodo({ id: todoId, value: todoValue });
  }

  @autobind
  private handleTodoRemove(itemId: number) {
    const { removeTodo } = this.props;
    removeTodo(itemId);
  }
}

const connectedComponent = connect(mapState, mapDispatch)(TodoListComponent);

export { connectedComponent as TodoList };
