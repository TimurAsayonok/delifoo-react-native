import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state={

    }
  }

  searchPressed(){
    this.props.fetchRecipes('bacon,cucumber,banana');
  }

  render(){
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity onPress={() => this.searchPressed()}>
        <Text style={{margin: 20}}>Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return{

  }
}

export default connect(mapStateToProps)(Home);
