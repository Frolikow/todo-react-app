import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { TodoLayout } from './view/components';

const Todo: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.todo.getElementKey()}
        path={routes.todo.getRoutePath()}
        component={TodoLayout}
      />
    );
  },
};

export { Todo };
