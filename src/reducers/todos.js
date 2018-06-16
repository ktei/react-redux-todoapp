import { FETCH_TODOS, UPDATE_NEW_ITEM, SAVE_NEW_ITEM, FETCH_REMOTE_TODOS_REQUEST, FETCH_REMOTE_TODOS_SUCCESS } from 'actions/todos';

const initialState = {
  newItem: '',
  items: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: [
          {
            id: 1,
            title: 'Hello',
          },
          {
            id: 2,
            title: 'World',
          },
        ],
      };

    case UPDATE_NEW_ITEM:
      return {
        ...state,
        newItem: {
          ...this.state.newItem,
          [action.payload.name]: action.payload.value,
        },
      };

    case SAVE_NEW_ITEM:
      return {
        ...state,
        items: [action.payload].concat(state.items),
      };

    case FETCH_REMOTE_TODOS_REQUEST:
      return {
        ...state,
        isFetchingRemoteTodos: true,
      };

    case FETCH_REMOTE_TODOS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetchingRemoteTodos: false,
      };

    default:
      return state;
  }
}
