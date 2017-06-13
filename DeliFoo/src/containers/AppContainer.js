import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import {
  Text,
  View
} from 'react-native'

class AppContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <Text style={{margin: 20}}>
          I am am App container
        </Text>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators ,dispatch);
}

export default connect(() => {return {}}, mapDispatchToProps)(AppContainer);
