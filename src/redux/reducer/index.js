import { combineReducers } from 'redux'
import userReducer from './user'
import oantutiReducer from './oantuti'
import bookingMovieReducer from './booking-movie'

const rootReducer = combineReducers({
    userReducer,
    oantutiReducer,
    bookingMovieReducer,
})
export default rootReducer