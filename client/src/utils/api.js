

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

