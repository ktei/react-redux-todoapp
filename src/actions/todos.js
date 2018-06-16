const namespace = 'todos';

export const FETCH_TODOS = `${namespace}/FETCH_TODOS`;
export const FETCH_REMOTE_TODOS_REQUEST = `${namespace}/FETCH_REMOTE_TODOS_REQUEST`;
export const FETCH_REMOTE_TODOS_SUCCESS = `${namespace}/FETCH_REMOTE_TODOS_SUCCESS`;
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

function fetchRemoteTodosRequest() {
  return {
    type: FETCH_REMOTE_TODOS_REQUEST,
  };
}

function fetchRemoteTodosSuccess(items) {
  return {
    type: FETCH_REMOTE_TODOS_SUCCESS,
    payload: items,
  };
}

function fetchRemoteTodosApi() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ title: 'buy milk' }, { title: 'feed the dog' }]), 1500);
  });
}

export function fetchRemoteTodos() {
  return (dispatch) => {
    dispatch(fetchRemoteTodosRequest());
    return fetchRemoteTodosApi().then(items => dispatch(fetchRemoteTodosSuccess(items)));
  };
}
