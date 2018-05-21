
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';

const configureStore = (history) => {
  const historyMiddleware = routerMiddleware(history);
  const store = createStore(
    reducers,
    applyMiddleware(historyMiddleware),
  );

  return store;
};

export default configureStore;
