import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'

class Contacts extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    console.log(this.props);

    return (
      <View style={{margin: 40}}>
        <Text>Hello</Text>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return{

  }
}

export default connect(mapStateToProps)(Contacts);
