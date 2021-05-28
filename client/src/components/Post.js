import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import CommentsContainer from './CommentsContainer'


class Post extends Component {
    render() {
        return (
            <div>
                <Card className='   mx-auto mt-4'>
                    <Card.Body>
                        <Card.Title>Card title by Author</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                </Card.Text>
                        <div style={{ textAlign: "right" }}>
                            <Button variant="outline-danger" >Delete</Button>
                            <Button variant="outline-primary" style={{ marginLeft: "1rem" }}>Edit</Button>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Row  >
                            <Col sm={4}   >
                                <p className="text-muted text-center ">TimeStamp</p>
                            </Col>
                            <Col sm={4}>
                                <p className="text-muted text-center">25 coments</p>
                            </Col>
                            <Col sm={4} style={{ textAlign: "right" }}>
                                <div >
                                    <small > Likes 25 </small>
                                    <AiOutlineLike size={25} />
                                    <AiOutlineDislike size={25} />
                                </div>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <div style={{ textAlign: "right" }}>
                    <Button variant="outline-dark mt-2 mr-auto" >Add New Comment</Button>
                </div>
                <CommentsContainer />

            </div>
        )
    }
}



export default connect()(Post)