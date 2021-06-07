import { getComments } from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'


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

 