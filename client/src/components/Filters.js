import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import {setOrderBy} from '../actions/order'
import {withRouter} from 'react-router-dom';

class Filters extends Component {

    onOrderChange = (e) => {
        const {dispatch} = this.props
        const {id} = e.target
        dispatch(setOrderBy(id))
            }

    onCategoryChange =(e) =>{
        const {dispatch} = this.props
        const category = e.target.value
         this.props.history.push(`/category/${category}`);
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
                                defaultValue={this.props.categoryPath}
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

function mapStateToProps({ orderBy, category }, props) {
       const pathname = props.location.pathname
    let categoryPath = ''
      if (pathname){
          let categor = pathname.split('/')[2]
          if (categor ==="react" || categor ==="redux" || categor ==="udacity"){
            categoryPath = categor
          }else{
              categoryPath = 'all'
          }
      }

    return { orderBy, categoryPath}
}

export default withRouter(connect(mapStateToProps)(Filters))