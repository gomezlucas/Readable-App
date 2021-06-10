import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import CommentsContainer from './CommentsContainer'
import { handleUpVotePost, handleDownVotePost, handleDeletePost } from '../actions/posts'
import { handleComments } from '../actions/comments'
import AddNewComment from './AddNewComment'

class Post extends Component {

    state = {
        showAddComments: false
    }

    toggleShowComments = () => {
        this.setState((prev) => ({
            showAddComments: !prev.showAddComments
        }))
    }

    componentDidMount() {
        const { id, dispatch } = this.props
        dispatch(handleComments(id))
    }



    handleUpVote = (e) => {
        const { id, dispatch } = this.props
        dispatch(handleUpVotePost(id))
    }

    handleDownVote = (e) => {
        const { id, dispatch } = this.props
        dispatch(handleDownVotePost(id))
    }

    onDelete = (e) => {
        const { id, dispatch, history } = this.props
        dispatch(handleDeletePost(id))
        history.push('/')
    }

    render() {
        const { post, date } = this.props

        if (!post) {
            return <h3>Loading ...</h3>
        }

        const { title, body,voteScore, id } = post
        return (
            <div>
                <Card className='   mx-auto mt-4'>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <div style={{ textAlign: "right" }}>
                            <Button variant="outline-danger" onClick={this.onDelete}>Delete</Button>
                            <Button variant="outline-primary" style={{ marginLeft: "1rem" }}>Edit</Button>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Row  >
                            <Col sm={4}   >
                                <p className="text-muted text-center ">{date}</p>
                            </Col>
                            <Col sm={4}>
                                <p className="text-muted text-center">{post.commentCount} comments</p>
                            </Col>
                            <Col sm={4} style={{ textAlign: "right" }}>
                                <div >
                                    <small > Votes {voteScore} </small>
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
                <div style={{ textAlign: "right" }}>
                    <Button variant="outline-dark mt-2 mr-auto" onClick={this.toggleShowComments} >Add New Comment</Button>
                </div>
                {
                    this.state.showAddComments && < AddNewComment parentId={id} />
                }
                <CommentsContainer />
            </div>
        )
    }
}

function mapStateToProps({ posts }, props) {
    const { id } = props.match.params
    const post = posts ? posts.filter(p => p.id === id)[0] : []
    const date = post && new Date(post.timestamp).toLocaleDateString("en-US")
    return {
        id,
        post,
        date
    }
}

export default connect(mapStateToProps)(Post)