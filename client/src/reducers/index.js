import { combineReducers } from 'redux'
import posts from './posts'
import orderBy from './order'


export default combineReducers({
    posts,
    orderBy
})
