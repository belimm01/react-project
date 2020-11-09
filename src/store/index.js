import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./root.reducer";
import thunk from "redux-thunk";

//reducers produce the state of your application

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;