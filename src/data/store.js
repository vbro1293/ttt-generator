import { createStore } from "redux";
import reducer from "./reducer";
import initial from "./initial";

//=============Connects reducer and initial, add Redux Dev Tools
const store = createStore(reducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;