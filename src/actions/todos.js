const namespace = 'todos';

export const FETCH_TODOS = `${namespace}/FETCH_TODOS`;
export const UPDATE_NEW_ITEM = `${namespace}/UPDATE_NEW_ITEM`;
export const SAVE_NEW_ITEM = `${namespace}/SAVE_NEW_ITEM`;

export function fetchTodos() {
  return {
    type: FETCH_TODOS,
  };
}

export function updateNewItem({ field, value }) {
  return {
    type: UPDATE_NEW_ITEM,
    payload: { field, value },
  };
}

export function saveNewItem(item) {
  return {
    type: SAVE_NEW_ITEM,
    payload: item,
  };
}
