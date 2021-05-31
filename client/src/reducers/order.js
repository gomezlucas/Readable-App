import { SET_ORDER_BY } from '../actions/order'


export default function orderBy(state = "timestamp", action) {
    switch (action.type) {
        case SET_ORDER_BY: {
            return action.orderBy
        }
        default:
            return state

    }
}