import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { handleAddPost, handleEditPost } from '../actions/posts'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddNewPost extends Component {


    state = {
        author: '',
        category: '',
        title: '',
        body: '',
        toHome: false

    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps.id, this.props.id)
        
           this.setState({
            author: nextProps.post.author,
            category: nextProps.post.category,
            title: nextProps.post.title,
            body: nextProps.post.body,
          })
     }


     componentDidMount() {
         if (this.props.post){
             this.setState({
              author: this.props.post.author,
              category: this.props.post.category,
              title: this.props.post.title,
              body: this.props.post.body,
            })

         }
     }

    handleOnChange = (e) => {
        const { name, value } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }

    handleOnSubmitNew = (e) => {
        e.preventDefault()
        const { title, author, category, body } = this.state
        const { dispatch } = this.props
        const post = {
            title, author, category, body
        }
        dispatch(handleAddPost(post))
        this.setState(() => ({
            title: '',
            author: '',
            category: 'react',
            body: '',
            toHome: true
        }))
    }


    handleOnSubmitEdit = (e) => {
        e.preventDefault()
        const { dispatch, post } = this.props
        const { title, body } = this.state

        dispatch(handleEditPost({
            title, body, id: post.id
        }))
        this.setState(() => ({
            title: '',
            author: '',
            category: 'react',
            body: '',
            toHome: true
        }))

    }

    render() {
        const { toHome } = this.state
        const { post } = this.props
        if (toHome) {
            return <Redirect to='/' />
        }

        return (
            <>
                <h3 className='text-center mb-5 mt-5'> {post ? "Edit Post" : "Create New Post"}  </h3>
                {JSON.stringify(this.state)}
                <Form className="w-75 mx-auto" onSubmit={post ? this.handleOnSubmitEdit : this.handleOnSubmitNew} >
                    <Form.Group controlId="option1" className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Title"
                            name='title'
                            value={this.state.title}
                            onChange={this.handleOnChange}
                        />
                    </Form.Group>

                    {!post &&
                        <>
                            <Form.Group controlId="option1" className="mb-3">
                                <Form.Label>Author</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Author"
                                    name='author'
                                    onChange={this.handleOnChange}
                                    defaultValue={post && post.author}

                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label >Choose Category</Form.Label>
                                <Form.Control
                                    name="category"
                                    onChange={this.handleOnChange}
                                    as="select" custom
                                    className="d-block"
                                    defaultValue={post && post.category}
                                >
                                    <option>React</option>
                                    <option>Redux</option>
                                    <option>Udacity</option>
                                </Form.Control>
                            </Form.Group>
                        </>}



                    <Form.Group controlId="option2" className="mb-3">
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            name="body"
                            onChange={this.handleOnChange}
                            as="textarea"
                            placeholder="Write the text here"
                            defaultValue={post && post.body}
                            style={{ height: '100px' }} />
                    </Form.Group>
                    <div style={{ textAlign: 'right' }}>
                        <Button
                            variant="outline-dark"
                            style={{ margin: ' 1rem 0 1rem auto' }}
                            type="submit"
                            disabled={this.state.title === '' || this.state.body === '' || this.state.author === ''}
                        >
                            {post ? "Edit Post" : "Add New Post"}
                        </Button>
                    </div>
                </Form>
            </>
        )
    }
}

function mapStateToProps({ posts }, props) {
    const { id } = props.match.params
    let post = id && posts.filter(p => p.id === id)[0]

    // console.log(id, post)
    return {
        post,
        posts,
        id

    }
}


export default connect(mapStateToProps)(AddNewPost)