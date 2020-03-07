import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import InlineSVG from 'svg-inline-react';

import { Todo } from '../../containers/TodoList/TodoList';

import svgPen from './img/pen-inline.svg';
import svgTrash from './img/trash-inline.svg';

import './TodoComponent.scss';

type Props = {
  todo: Todo,
  onStatusChange(id: number): void,
  onChange(id: number, todo: string): void,
  onRemove(itemId: number): void,
};

type State = {
  isContentEditable: boolean,
  todo: string,
}

const b = block('todo-component');

class TodoComponent extends React.Component<Props, State> {
  public state = {
    isContentEditable: false,
    todo: this.props.todo.value,
  }

  render() {
    const { todo } = this.props;
    const { isContentEditable } = this.state;

    return (
      <div id={`${todo.id}`} className={b({ completed: todo.isCompleted })}>
        <div className={b('checkbox', { checked: todo.isCompleted })} onClick={this.handleTodoStatusClick} />
        <p
          contentEditable={isContentEditable}
          suppressContentEditableWarning
          className={b('content', { editable: isContentEditable })}
          onBlur={this.handleContentChange}
        >
          {this.state.todo}
        </p>
        <div className={b('icons')}>
          <InlineSVG
            className={b('pen', { edited: isContentEditable })}
            element="div"
            src={svgPen}
            onClick={this.handleChangeContentClick}
          />
          <InlineSVG
            className={b('trash')}
            element="div"
            src={svgTrash}
            onClick={this.handleRemoveTodoClick}
          />
        </div>
      </div>
    );
  }

  private handleTodoStatusClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.parentElement) {
      this.props.onStatusChange(Number(event.currentTarget.parentElement.id));
    }
  }

  @autobind
  private handleContentChange(event: React.ChangeEvent<HTMLParagraphElement>) {
    this.setState({ todo: event.target.innerText });
  }

  @autobind
  private handleChangeContentClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    if (this.state.isContentEditable) {
      this.props.onChange(this.props.todo.id, this.state.todo);
    }
    this.setState(prevState => ({ isContentEditable: !prevState.isContentEditable }));
  }

  @autobind
  private handleRemoveTodoClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    if (event.currentTarget.parentElement
      && event.currentTarget.parentElement.parentElement
      && event.currentTarget.parentElement.parentElement.id) {
      const itemId = Number(event.currentTarget.parentElement.parentElement.id);

      this.props.onRemove(itemId);
    }
  }
}

export { TodoComponent };
