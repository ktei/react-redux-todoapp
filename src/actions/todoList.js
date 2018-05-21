const namespace = 'todoList';

export const FETCH_TODOS = `${namespace}/FETCH_TODOS`;

export function fetchTodos() {
  return {
    type: FETCH_TODOS,
  };
}
