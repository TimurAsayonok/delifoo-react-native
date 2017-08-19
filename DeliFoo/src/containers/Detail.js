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
  StyleSheet,
  StatusBar
} from 'react-native'
import Styles from './styles'

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { navigationParams } = this.props;
    console.log(this.props)
    if (!navigationParams.recipe) return null;
    return (
      <View style={Styles.scene}>
        <View style={Styles.goBackContainer}>
          <TouchableOpacity onPress={() => { this.props.navigationBack() }}>
            <Text style={Styles.goBackTitle}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <View style={Styles.recipeIdContainer}>
            <Text style={Styles.recipeIdTitle}>{navigationParams.recipe.id}</Text>
          </View>
          <View style={Styles.recipeTitleContainer}>
            <Text style={Styles.recipeTitle} numberOfLines={1}>{navigationParams.recipe.title}</Text>
          </View>
        </View>
        <View>
          <Image source={{ uri: navigationParams.recipe.thumbnail }} style={Styles.image} />
          <Text style={Styles.recipeIngredients}>{navigationParams.recipe.ingredients}</Text>
        </View>
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
