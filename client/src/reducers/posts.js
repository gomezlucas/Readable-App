import { RECEIVE_POSTS, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST, ADD_POST } from '../actions/posts'


export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return [
                ...action.post
            ]
        case UPVOTE_POST:
             return [
                ...state.map(st => {
                    if (st.id === action.id) {
                        return { ...st, voteScore: st.voteScore + 1 }
                    }
                    return st
                })
            ]
        case DOWNVOTE_POST:
            return [
                ...state.map(st => {
                    if (st.id === action.id) {
                        return { ...st, voteScore: st.voteScore - 1 }
                    }
                    return st
                })
            ]
        case DELETE_POST: {
            const postFiltered = state.filter(st=> st.id !== action.id)
        return [
            ...postFiltered
        ]
    }
    case ADD_POST: {
        return [
            ...state, 
            action.post
        ]
    }
        default:
            return state
    }

}

/*
   case GET_POST_VOTES:
      return {
        ...state,
        items: state.items.map(post => {
          if (post.id === action.postId) {
            return {
              ...post,
              voteScore:
                action.vote === 'upVote'
                  ? post.voteScore + 1
                  : post.voteScore - 1
            }
          }
          return post
        })
      }

*/