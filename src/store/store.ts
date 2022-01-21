import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger"; //dev purpose
import createSagaMiddleware from "redux-saga";
import reducers from "./root-reducer";
import rootSaga from "./root-saga";

const rootReducer = combineReducers({
  ...reducers,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const ENVIRONMENT = "development";

if (ENVIRONMENT === "development") {
  middleware.push(logger);
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export { store };
