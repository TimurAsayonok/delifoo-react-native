import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    console.log(this.props);

    return (
      <View style={{margin: 40}}>
        <Text>Detail</Text>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return{

  }
}

export default connect(mapStateToProps)(Detail);
