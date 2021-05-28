import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { handleUpVotePost, handleDownVotePost, handleDeletePost } from '../actions/posts'
import {Link} from 'react-router-dom'

class PostCard extends Component {

    handleUpVote = (e) => {
        const { id, dispatch } = this.props
        dispatch(handleUpVotePost(id))
    }

    handleDownVote = (e) => {
        const { id, dispatch } = this.props
        dispatch(handleDownVotePost(id))
    }

    onDelete = (e) => {
        const { id, dispatch } = this.props
        dispatch(handleDeletePost(id))
    }

    render() {
        const { post, date } = this.props

        return (
            <Card className='post-card  mx-auto mt-4'>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-capitalize">by {post.author}</Card.Subtitle>

                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <div style={{ textAlign: "right" }}>
                        <Button variant="outline-danger" onClick={this.onDelete} >Delete</Button>
                        <Link to={`/edit/${post.id}`} >
                        <Button variant="outline-primary"  style={{ marginLeft: "1rem" }}>Edit</Button>
                        </Link>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row  >
                        <Col sm={4}   >
                            <p className="text-muted text-center ">{date}</p>
                        </Col>
                        <Col sm={4}>
                            <p className="text-muted text-center"> {post.commentCount} coments</p>
                        </Col>
                        <Col sm={4} style={{ textAlign: "right" }}>
                            <div >
                                <small > Votes {post.voteScore} </small>
                                <button className="like-button"
                                    onClick={this.handleUpVote}
                                >
                                    <AiOutlineLike size={25} />
                                </button>
                                <button className="like-button"
                                    onClick={this.handleDownVote}
                                >
                                    <AiOutlineDislike size={25} />
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        )
    }
}

function mapStateToProps({ posts }, { id }) {
    const post = posts.filter(post => post.id === id)[0]
    const date = new Date(post.timestamp).toLocaleDateString("en-US")

    return {
        post,
        date
    }
}

export default connect(mapStateToProps)(PostCard)