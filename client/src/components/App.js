import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Filters from './Filters'
import Post from './Post'
import PostContainer from './PostContainer'
import AddNewPost from './AddNewPost'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Container>
          <MainNavbar />
          <Filters />
          <Switch>
            <Route path='/add' component={AddNewPost} />
            <Route exact path='/edit/:id' component={AddNewPost} />
            <Route exact path='/' component={PostContainer} />
          </Switch>
        </Container>
      </Router >
    );
  }
}


export default connect()(App)

