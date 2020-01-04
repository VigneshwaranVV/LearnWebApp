import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  authReducer: {
    isLoggedIn: false,
    isLoading: false
  },
};
const configureStore = () => {
  const middlewares = [sagaMiddleware];
  const composeEnhancers =
   (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== "production")
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );
  const store = createStore(reducers, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
