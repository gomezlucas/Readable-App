import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AddNewComment() {
    return (
        <>
            <h3 className='text-center mb-5 mt-5'> Create New Post </h3>

            <Form className="w-75 mx-auto " >
        
                <Form.Group controlId="option1" className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author"
                        name='text1'
                    />
                </Form.Group>

                <Form.Group controlId="option2" className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }} />
            </Form.Group>
            <div style={{textAlign: 'right'}}>
            <Button variant="outline-dark" style={{ margin: ' 1rem 0 1rem auto' }} type="submit"  >
                        Add New Post // Edit
        </Button>
            </div>
        </Form>
    </>
    )


}


export default AddNewComment