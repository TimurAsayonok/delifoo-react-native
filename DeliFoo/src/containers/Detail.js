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

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { navigationParams } = this.props;
    console.log(this.props)
    if (!navigationParams.recipe) return null;
    return (
      <View style={{flex: 1}}>
        <View style={{ paddingTop: 30, paddingLeft: 10, paddingBottom: 10, backgroundColor: '#f2f2f2' }}>
          <TouchableOpacity onPress={() => { this.props.navigationBack() }}>
            <Text style={{ color: '#333', fontSize: 16 }}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <View style={{ 
            height: 50, 
            width: 50, 
            backgroundColor: '#333333', 
            justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: '#FFF', fontSize: 16 }}>{navigationParams.recipe.id}</Text>
          </View>
          <View style={{ backgroundColor: '#993366', flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
            <Text style={{ color: '#fff', fontSize: 18 }} numberOfLines={1}>{navigationParams.recipe.title}</Text>
          </View>
        </View>
        <View>
          <Image source={{ uri: navigationParams.recipe.thumbnail }} style={styles.image} />
          <Text style={{ padding: 10, fontSize: 16 }}>{navigationParams.recipe.ingredients}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    height: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row'
  },
  searchSectionTextInput: {
    flex: 0.7
  },
  searchSectionButton: {
    flex: 0.3
  },
  scrollSection: {
    flex: 0.8,
  },
  recipeSection: {
    marginBottom: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  image: {
    height: 300
  }
});


function mapStateToProps(state) {
  return{
    navigationParams: state.navigationParams,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
