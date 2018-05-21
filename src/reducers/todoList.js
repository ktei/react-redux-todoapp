import { FETCH_TODOS } from 'actions/todoList';

const initialState = {
  items: [],
};

export default function todoList(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: [
          {
            title: 'Hello',
          },
          {
            title: 'World',
          },
        ],
      };
    default:
      return state;
  }
}
