import { SET_CATEGORY } from '../actions/category'



export default function category(state = 'all', action) {
    switch (action.type) {
        case SET_CATEGORY: {
            return action.category
        }
        default:
            return state
    }
}