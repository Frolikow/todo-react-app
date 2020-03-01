import { IAppReduxState } from 'shared/types/app';

import * as NS from '../namespace';
import { Todo } from '../view/containers/TodoList/TodoList';

function selectFeatureState(state: IAppReduxState): NS.IReduxState {
  return state.todoList;
}

export function selectTodoList(state: IAppReduxState): Todo[] {
  return selectFeatureState(state).data.todoList;
}
