import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text
} from 'react-native'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state={

    }
  }

  render(){
    return (
      <View>
        <Text style={{margin: 20}}>Home</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return{

  }
}

export default connect(mapStateToProps)(Home);
