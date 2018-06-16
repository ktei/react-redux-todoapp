import { FETCH_TODOS, UPDATE_NEW_ITEM, SAVE_NEW_ITEM } from 'actions/todos';

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

    default:
      return state;
  }
}
