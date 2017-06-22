import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
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
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => this.searchPressed()}>
          <Text>Search Recipes</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return{

  }
}

export default connect(mapStateToProps)(Home);
