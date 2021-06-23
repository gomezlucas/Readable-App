

import { generateUID } from './helpers'

//Replace with your own server and port
const api = "http://localhost:3001"


let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}


export const getInitialData = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => {
      return data
    })


  export const getComments = (id)=>
   fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => {
       return data
   })
   
  
export const updateVote = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())


export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => res.json())



export const addPost = (post) => {
  let postObj = {
    ...post,
    id: generateUID(),
    timestamp: Date.now()
  }
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(postObj)
  })
    .then(res => res.json())
}

export const editPost = (post) => {
  let postObj = {
    title: post.title,
    body: post.body,
  }
  return fetch(`${api}/posts/${post.id}`, {
    method: 'put',
    headers,
    body: JSON.stringify(postObj)
  })
    .then(res => res.json())
}



export const deleteCommentApi = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => res.json())


export const updateCommentVote = (id, vote) =>
fetch(`${api}/comments/${id}`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ option: vote })
})
  .then(res => res.json())


  export const addComment = (comment) => {
    let commentObj = {
      ...comment,
      id: generateUID(),
      timestamp: Date.now()
    }
     return fetch(`${api}/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify(commentObj)
    })
      .then(res => res.json())
  }

  export const editComment = (comment) => {
     const commentObj ={
      timestamp: Date.now(),
      body: comment.body
    }
     return fetch(`${api}/comments/${comment.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(commentObj),
      })
    .then(res=>res.json())
  }