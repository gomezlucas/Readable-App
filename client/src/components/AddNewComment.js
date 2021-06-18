import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addCommentAction, handleEditComment } from '../actions/comments'

class AddNewComment extends Component {
    state = {
        author: '',
        body: ''
    }



    componentDidMount() {
        if (this.props.comment) {
            this.setState({
                author: this.props.comment.author,
                body: this.props.comment.body,
            })

        }
    }


    handleOnChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState((prev) => ({
            [name]: value
        }))
    }


    handleSubmitEditComment = (e) => {
        const { dispatch, comment } = this.props
        e.preventDefault()
        const commentObj = {
            ...comment,
            body: this.state.body,
        }

        dispatch(handleEditComment(commentObj))

    }

    handleSubmit = (e) => {
        const { parentId, dispatch } = this.props
        e.preventDefault()
        const comment = {
            author: this.state.author,
            body: this.state.body,
            parentId
        }
        dispatch(addCommentAction(comment))
        this.setState(() => ({
            author: '',
            body: ''
        }))
        this.props.setshowAddComments()
    }


    cancelEdit = () => {
        this.props.clearEdit()
    }


    render() {
        const { comment } = this.props
        return (
            <>
                <h3 className='text-center mb-5 mt-5'> {comment ? 'Edit your Comment' : 'Create your Comment'} </h3>
                {JSON.stringify(this.state)}
                <Form className="w-75 mx-auto" >

                    <Form.Group controlId="option1" className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text" placeholder="Enter Author"
                            name='author'
                            value={this.state.author}
                            onChange={this.handleOnChange}
                            disabled={comment !== null ? true : false}
                        />
                    </Form.Group>

                    <Form.Group controlId="option2" className="mb-3">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            as="textarea"
                            onChange={this.handleOnChange}
                            placeholder="Leave a comment here"
                            value={this.state.body}
                            name="body"
                            style={{ height: '100px' }} />
                    </Form.Group>
                    <div style={{ textAlign: 'right' }}>
                        {comment ?
                            <>      <Button variant="outline-danger" style={{ margin: ' 1rem 1rem  1rem auto' }} onClick={this.cancelEdit} >
                                Cancel
                            </Button>
                                <Button variant="outline-primary" style={{ margin: ' 1rem 0 1rem auto' }} type="submit" onClick={this.handleSubmitEditComment} >
                                    Save Comment
                                </Button>
                            </>
                            :
                            <Button variant="outline-dark" style={{ margin: ' 1rem 0 1rem auto' }} type="submit" onClick={this.handleSubmit} >
                                Add New Comment
                            </Button>
                        }

                    </div>
                </Form>
            </>
        )
    }
}

function mapStateToProps({ }, props) {
    let comment = props.comment ? props.comment : null

    return { comment }
}

export default connect(mapStateToProps)(AddNewComment)