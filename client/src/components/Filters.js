import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import {setOrderBy} from '../actions/order'
import {Link} from 'react-router-dom'

class Filters extends Component {

    onOrderChange = (e) => {
        const {dispatch} = this.props
        const {id} = e.target
        dispatch(setOrderBy(id))
            }

    onCategoryChange =(e) =>{
        const {dispatch} = this.props
        console.log(e.target.value)
        
    }

    render() {
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
                                    checked={this.props.orderBy === 'timestamp'}
                                    onChange={this.onOrderChange}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Scores"
                                    name="orderby"
                                    id="scores"
                                    checked={this.props.orderBy === 'scores'}
                                    onChange={this.onOrderChange}

                                />
                            </Col>
                            <Col sm={6}>
                                <Form.Label as="legend">Choose Category</Form.Label>
                                <Form.Control as="select" size="md" className='w-100' custom 
                                onChange={this.onCategoryChange}
                                >
                                    <option value="all">All</option>
                                    <option value="react">React</option>
                                    <option value="redux">Redux</option>
                                    <option value="udacity">Udacity</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </fieldset>

                </Form>
            </Container>
        )
    }

}

function mapStateToProps({ orderBy }) {
      return { orderBy }
}

export default connect(mapStateToProps)(Filters)