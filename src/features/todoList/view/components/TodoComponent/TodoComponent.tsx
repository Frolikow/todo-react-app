import React from 'react';
import block from 'bem-cn';

import './TodoComponent.scss';

type Props = {
  todo: Todo,
  onChange(event: React.MouseEvent<HTMLDivElement>): void,
};

type State = {
  isChecked: boolean,
}

type Todo = {
  id: number,
  value: string,
  isCompleted: boolean,
};

const b = block('todo-component');

class TodoComponent extends React.PureComponent<Props, State> {
  public state = {
    isChecked: this.props.todo.isCompleted,
  }

  render() {
    const { todo } = this.props;
    const { isChecked } = this.state;

    return (
      <div key={todo.id} id={`${todo.id}`} className={b({ completed: todo.isCompleted })} onClick={this.handleTodoClick}>
        <input type="checkbox" className={b('checkbox')} checked={isChecked} />
        {todo.value}
      </div>
    );
  }

  private handleTodoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.props.onChange(event);
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  }
}

export { TodoComponent };
