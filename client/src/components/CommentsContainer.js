import React, { Component } from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import {handleDeleteComment, handleVoteComment} from '../actions/comments'
import AddNewComment from './AddNewComment'

class CommentsContainer extends Component {

    state ={
        showEditForm: null
    }

    handleVote = (id, vote) => {
        const {  dispatch } = this.props
         dispatch(handleVoteComment(id,vote))
     }

  

    onDelete = (id) => {
        const { dispatch, parentId } = this.props
        dispatch(handleDeleteComment(id, parentId))
     }


     handleEdit =(id ) =>{
        const { dispatch, parentId } = this.props
        this.setState({showEditForm: id})
        console.log(this.state)
     }

     clearEdit = () =>{
         this.setState({showEditForm:null})
     }

 
    showComments = (comments) =>{
          return (
            comments.map(c=>
    c.id === this.state.showEditForm ? 
    <AddNewComment comment={c} clearEdit={this.clearEdit} /> : 
    <Card className="my-2" key={c.id}>
    <Card.Body>
        <Card.Title>{c.author}</Card.Title>
         <Card.Text>
           {c.body}
        </Card.Text>
        <div style={{ textAlign: "right", margin: "1rem 0 1rem 0" }}>
            <Button variant="outline-danger" onClick={()=>this.onDelete(c.id)} >Delete</Button>
            <Button variant="outline-primary" onClick={()=>this.handleEdit(c.id)} style={{ marginLeft: "1rem" }}>Edit</Button>
        </div>
        <Row>
            <Col sm={12} style={{ textAlign: "right" }}>
                <div >
                    <small > Likes {c.voteScore} </small>
                    <button onClick={()=>this.handleVote(c.id, 'upVote')} className="like-button"> 
                    <AiOutlineLike size={25} />
                    </button>
                    <button  onClick={()=>this.handleVote(c.id, 'downVote')} className="like-button">
                    <AiOutlineDislike size={25} />
                    </button>
                </div>
            </Col>
        </Row>
    </Card.Body>
</Card>
              
               
            )
        )
    }

    render() {
        const { comments} = this.props
        return (
            <Container className="my-4">
                <h3> Comments </h3>
                    { comments && this.showComments(comments)}       
            </Container>
        )
    }
}

function mapStateToProps({ comments },props){
    const {parentId} = props
      return{
        comments, 
        parentId
    }
}

export default connect(mapStateToProps)(CommentsContainer)