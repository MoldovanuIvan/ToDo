import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import notesReducer from "./notes-reducer";

let reducers = combineReducers({
    notesPage: notesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;