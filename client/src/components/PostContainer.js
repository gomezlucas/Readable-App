import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'

class PostContainer extends Component {
    render() {
        const { sorted } = this.props

        return (
            <Container>
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


function mapStateToProps({ posts, orderBy }) {
 
console.log(posts)
console.log(orderBy)
let sorted = []
if (orderBy === "timestamp"){
    sorted = [ ...posts].sort((a,b)=>b.timestamp - a.timestamp)
}else{ 
    sorted = [ ...posts].sort((a,b)=>b.voteScore - a.voteScore)
}

    return { sorted}
}

export default connect(mapStateToProps)(PostContainer)