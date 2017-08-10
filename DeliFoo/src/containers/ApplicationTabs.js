import React, {Component} from 'react'
import {View, TabBarIOS, TabBarItemIOS} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from '../components/Home'

class ApplicationTabs extends React.Component {
  constructor(props) {
    super(props)
  }

  renderScene(component){
    return(
      <View style={{flex:1}}>
        {React.createElement(component, this.props)} //we should use React.createElement for creating Component using our class
      </View>
    )
  }

  render() {
    return (
      <TabBarIOS style={{flex:1}}>
        <TabBarIOS.Item systemIcon="favorites" iconSize={25}>
          {this.renderScene(Home)} //Home is class, isn't component
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon="contacts" iconSize={25}>
          {this.renderScene(Home)} //Home is class, isn't component
        </TabBarIOS.Item>
      </TabBarIOS>
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
