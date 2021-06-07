import { combineReducers } from 'redux'
import posts from './posts'
import orderBy from './order'
import category from './category'
import comments from './comments'


export default combineReducers({
    posts,
    orderBy,
    category,
    comments
})
