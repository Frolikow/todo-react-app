import { IReduxState } from '../namespace';
import { initiaTodoList } from 'shared/constants';

const initial: IReduxState = {
  data: {
    todoList: initiaTodoList,
  }
};

export { initial };
