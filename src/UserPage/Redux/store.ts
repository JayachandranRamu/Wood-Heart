import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import {reducer as adminReducer} from "./Admin/reducer"
import {reducer as productReducer} from "./UserPage/reducer"
import {reducer as authReducer} from "./Auth/reducer"


const rootReducer=combineReducers({
    adminReducer,productReducer,authReducer
})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))