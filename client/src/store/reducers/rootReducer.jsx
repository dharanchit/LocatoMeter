import authReducer from '../reducers/authReducer'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    auth:authReducer,
})

export default rootReducer;