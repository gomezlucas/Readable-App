import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'
import Filters from './Filters'

class PostContainer extends Component {
    render() {
        const { sorted } = this.props

        return (
            <Container>
                <Filters />
                <Link to="/Add">
                    <Button variant="outline-dark" style={{ margin: ' 1rem 0 1rem auto' }} type="submit"  >
                        Add New Post
                  </Button>
                </Link>
                <CardDeck className='my-5' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {sorted.map(p => <PostCard id={p.id} key={p.id} />)}
                </CardDeck>
            </Container>
        )
    }
}


function mapStateToProps({ posts, orderBy }, props) {
 
const pathname = props.location.pathname
let postsFilter = [...posts]
 
let categoryType =  pathname && pathname.split('/')[2]
if(categoryType && categoryType !== 'all'){
    postsFilter = posts.filter(p=>{
        return p.category.toLowerCase() === categoryType.toLowerCase()})
}

 let sorted = []
if (orderBy === "timestamp"){
     sorted = [ ...postsFilter].sort((a,b)=>b.timestamp - a.timestamp)
}else{ 
    sorted = [ ...postsFilter].sort((a,b)=>b.voteScore - a.voteScore)
}

     return { sorted}
}

export default connect(mapStateToProps)(PostContainer)