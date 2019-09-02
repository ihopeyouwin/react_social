import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidepageReducer from "./sidepage-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidePage: sidepageReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);

export default store;