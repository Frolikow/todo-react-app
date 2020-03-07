import { ICommunication } from 'shared/types/redux';
import { IPaginationState } from 'shared/types/common';
import { Todo } from 'features/todoList/view/containers/TodoList/TodoList';

export const initialCommunicationField: ICommunication = { isRequesting: false, error: '' };
export const initialPaginationState: IPaginationState = { page: 1, totalPages: 1 };
export const initiaTodoList: Todo[] = [
  { id: 0, value: 'go 00000 to book', isCompleted: false },
  { id: 1, value: 'read 11111 the book', isCompleted: false },
  { id: 2, value: 'read 22222 the journal journal journal journal journal journal journal journal journal journal', isCompleted: true },
  { id: 3, value: 'read 33333 the news', isCompleted: false },
]