import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from '../components/Home'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Home {...this.props}/>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators ,dispatch);
}

function mapStateToProps(state){
  return {
    recipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
