import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Filters() {

    return (
        <Container>
            <Form>
                <fieldset>
                    <Form.Group as={Row} className='mt-3 '>
                        <Col sm={6}   >
                            <Form.Label as="legend"  >
                                Order By
                    </Form.Label>
                            <Form.Check
                                inline
                                type="radio"
                                label="Timestamp"
                                name="orderby"
                                id="timestamp"
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Scores"
                                name="orderby"
                                id="scores"
                            />
                        </Col>
                        <Col sm={6}>
                            <Form.Label as="legend">Choose Category</Form.Label>
                            <Form.Control as="select" size="md"  className='w-100'  custom  >
                                <option>React</option>
                                <option>Redux</option>
                                <option>Udacity</option>                                                             
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </fieldset>

            </Form>
        </Container>
    )
}


export default Filters