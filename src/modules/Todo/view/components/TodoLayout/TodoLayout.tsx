import React from 'react';
import block from 'bem-cn';

import * as features from 'features';
import { TodoList } from 'features/todoList/view/containers';

import { Layout } from '../../../../shared';
import './TodoLayout.scss';


interface IFeatureProps {
  todoListFeatureEntry: features.todoList.Entry;
}

type IProps = IFeatureProps;

const b = block('todo-layout');

class TodoLayoutComponent extends React.PureComponent<IProps> {
  public render() {
    // const { todoListFeatureEntry: { containers } } = this.props;
    // const { TodoList } = containers;

    return (
      <Layout>
        <div className={b()}>
          <TodoList />
        </div>
      </Layout>
    );
  }
}

export { TodoLayoutComponent as TodoLayout };
