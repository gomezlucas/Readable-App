
import { getInitialData } from '../utils/api'
import {receivePosts} from './posts'



export function handleInitialData() {
    return (dispatch) => {
        return (getInitialData()
        .then((posts)=>{
            dispatch(receivePosts(posts))
       
        })
        )
        
    }
} 