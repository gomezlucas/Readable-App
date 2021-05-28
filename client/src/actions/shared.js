
import { getInitialData } from '../utils/api'
import {receivePosts} from './posts'



export function handleInitialData() {
    return (dispatch) => {
        return (getInitialData()
        .then((posts)=>{
            dispatch(receivePosts(posts))
       //     console.log(posts, 'the posts aree')
     //       posts.forEach(post => dispatch(receivePosts(post))
            //)
        
        })


        )
        
    }
} 