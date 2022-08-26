import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducers";
import { registerReducers } from "../reducers/registerReducers";

//TODO: recordar quitar luego
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers
})

//? Aqui estan todos los reducers que utilizaremos mas adelante
export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
);