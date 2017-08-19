import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} from 'react-native'

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { recipe } = this.props.navigationParams;
    console.log(this.props)
    return (
      <View>
        <TouchableHighlight 
          style={{flex: 1, paddingVertical: 20, backgroundColor: '#222'}} 
          onPress={ () => {this.props.navigationBack()}}>
          <Text style={{color:'#fff'}}>Back</Text>
        </TouchableHighlight>
        <Text>Detail</Text>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return{
    navigationParams: state.navigationParams,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
