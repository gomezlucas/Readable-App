import { updateVote, deletePost, addPost, editPost } from '../utils/api'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'


export function receivePosts(post) {
    return {
        type: RECEIVE_POSTS,
        post
    }
}


 
function upvotePost(id) {
    return {
        type: UPVOTE_POST,
        id
    }
}


function downvotePost(id) {
    return {
        type: DOWNVOTE_POST,
        id
    }
}


export function handleUpVotePost(id) {
    return (dispatch) => {
        dispatch(upvotePost(id))
        return updateVote(id, 'upVote')
            .catch((e) => {
                console.warn('Error in handling liking Post', e)
                dispatch(downvotePost(id))
                alert('There was an error liking the Post. Try again')
            })
    }
}


export function handleDownVotePost(id) {
    return (dispatch) => {
        dispatch(downvotePost(id))
        return updateVote(id, 'downVote')
            .catch((e) => {
                console.warn('Error in handling liking Post', e)
                dispatch(upvotePost(id))
                alert('There was an error liking the Post. Try again')
            })
    }
}


function erasePost(id) {
    return {
        type: DELETE_POST,
        id
    }
}


export function handleDeletePost(id) {
    return (dispatch) => {
        dispatch(erasePost(id))
        return deletePost(id)
            .catch((e) => {
                console.warn('Error deleting the Post', e)
                 alert('There was an error deleting the Post. Try again')
            })
    }
}

function addPostAction(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost(post) {
    return (dispatch) => {
        return addPost(post)
            .then(postRes => dispatch(addPostAction(postRes)))
    }
}


function editPostAction(post) {
    return {
        type: EDIT_POST,
        post
    }
}

export function handleEditPost(post) {
    return (dispatch) => {
        return editPost(post)
            .then(postRes => dispatch(editPostAction(postRes)))
    }
}