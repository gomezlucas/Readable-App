import { getComments, deleteCommentApi, updateCommentVote } from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPDATE_VOTE_COMMENT = 'UPDATE_VOTE_COMMENT'

function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}


export function handleComments(id) {
    return (dispatch) => {
        return (getComments(id)
            .then((comments) => dispatch(receiveComments(comments)))
            .catch(err => console.log(err))
        )
    }
}



function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}


export function handleDeleteComment(id) {
    return (dispatch) => {
        return deleteCommentApi(id)
            .then(res => dispatch(deleteComment(id)))
            .catch(err => console.log(err))
    }
}


function updateCommentReducer(id, vote) {
    return {
        type: UPDATE_VOTE_COMMENT,
        id,
        vote,
    }
}


export function handleVoteComment(id, vote) {
    return (dispatch) => {
        return updateCommentVote(id, vote)
            .then(res => dispatch(updateCommentReducer(id, vote)))
            .catch(err => console.log(err))
    }
}