import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import initial from "./initial";

//=============Redux DevTools Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//=============Redux DevTools Middleware
const store = createStore(reducer, initial);

export default store;