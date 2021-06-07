import React, { Component } from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from 'react-icons/ai';


class CommentsContainer extends Component {

    render() {
        return (
            <Container className="my-4">
                <h3> Comments </h3>
                <Card className="my-2">
                    <Card.Body>
                        <Card.Title>Author</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div style={{ textAlign: "right", margin: "1rem 0 1rem 0" }}>
                            <Button variant="outline-danger" >Delete</Button>
                            <Button variant="outline-primary" style={{ marginLeft: "1rem" }}>Edit</Button>
                        </div>
                        <Row>
                            <Col sm={12} style={{ textAlign: "right" }}>
                                <div >
                                    <small > Likes 25 </small>
                                    <AiOutlineLike size={25} />
                                    <AiOutlineDislike size={25} />
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="my-2">
                    <Card.Body>
                        <Card.Title>Author</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div style={{ textAlign: "right", margin: "1rem 0 1rem 0" }}>
                            <Button variant="outline-danger" >Delete</Button>
                            <Button variant="outline-primary" style={{ marginLeft: "1rem" }}>Edit</Button>
                        </div>
                        <Row>
                            <Col sm={12} style={{ textAlign: "right" }}>
                                <div >
                                    <small > Likes 25 </small>
                                    <AiOutlineLike size={25} />
                                    <AiOutlineDislike size={25} />
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="my-2">
                    <Card.Body>
                        <Card.Title>Author</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div style={{ textAlign: "right", margin: "1rem 0 1rem 0" }}>
                            <Button variant="outline-danger" >Delete</Button>
                            <Button variant="outline-primary" style={{ marginLeft: "1rem" }}>Edit</Button>
                        </div>
                        <Row>
                            <Col sm={12} style={{ textAlign: "right" }}>
                                <div >
                                    <small > Likes 25 </small>
                                    <AiOutlineLike size={25} />
                                    <AiOutlineDislike size={25} />
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps({ posts },props){
    
    const {id} = props.param.match
    return{

    }
}

export default connect()(CommentsContainer)