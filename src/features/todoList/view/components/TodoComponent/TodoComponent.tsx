import React from 'react';
import block from 'bem-cn';

import './TodoComponent.scss';
import InlineSVG from 'svg-inline-react';

import svgPen from './img/pen-inline.svg';
import svgTrash from './img/trash-inline.svg';

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

class TodoComponent extends React.Component<Props, State> {
  public state = {
    isChecked: this.props.todo.isCompleted,
  }

  render() {
    const { todo } = this.props;

    return (
      <div id={`${todo.id}`} className={b({ completed: todo.isCompleted })} onClick={this.handleTodoClick}>
        {todo.value}
        <div className={b('icons')}>
          {console.log(svgPen)}
          <InlineSVG
            className={b('pen')}
            element="div"
            src={svgPen}
            onClick={this.handleIconClick}
          />
          <InlineSVG
            className={b('trash')}
            element="div"
            src={svgTrash}
            onClick={this.handleIconClick}
          />

        </div>
      </div>
    );
  }

  private handleTodoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    this.props.onChange(event);
  }


  private handleIconClick(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();
  }
}

export { TodoComponent };
