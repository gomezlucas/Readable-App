import { RECEIVE_COMMENTS, DELETE_COMMENT, UPDATE_VOTE_COMMENT, ADD_COMMENT,EDIT_COMMENT } from '../actions/comments'


export default function comments(state = [], action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case DELETE_COMMENT:
            return [...state.filter(c => c.id !== action.id)]
        case UPDATE_VOTE_COMMENT:
            return [...state.map(item => {
                if (item.id === action.id) {
                    return { ...item, voteScore: action.vote === 'upVote' ? item.voteScore + 1 : item.voteScore - 1 }
                }
                return item
            })]
        case ADD_COMMENT:
            return [...state, action.comment]
        case EDIT_COMMENT:
            return [...state.map(item=>{
                if(item.id=== action.comment.id){
                    return action.comment
                }
                return item
            })]
        default:
            return state
    }
}