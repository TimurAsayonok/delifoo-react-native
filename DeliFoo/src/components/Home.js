import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import Styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      ingredientsInput: '',
      isSearching: false
    }
  }

  searchPressed(){
    this.setState({isSearching: true});
    this.props.fetchRecipes(this.state.ingredientsInput).then( () => {
      this.setState({isSearching: false});
    });
  }

  getRecipes(){
    return Object.keys(this.props.recipes).map(key => this.props.recipes[key])
  }

  render(){
    console.log(this.props);

    return (
      <View style={Styles.scene}>
        <View style={Styles.searchSection}>
          <TextInput style={Styles.searchSectionTextInput}
            returnKeyType='search'
            placeholder='Type ingredients here'
            onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
            value={this.state.ingredientsInput}
          />
          <TouchableOpacity style={Styles.searchSectionButton} onPress={() => this.searchPressed()}>
            <Text style={Styles.searchSectionButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={Styles.scrollSection} automaticallyAdjustContentInsets={false}>
          {!this.state.isSearching && this.getRecipes().map((recipe) => {
            return <TouchableHighlight 
            onPress={() => this.props.navigate({key: 'Detail', recipe: recipe})}
            key={recipe.id}>
              <View>
                <View style={Styles.recipeMain}>
                  <View style={Styles.recipeContainer}>
                    <Text style={Styles.recipeId}>{recipe.id}</Text>
                  </View>
                  <View style={Styles.recipeTitleContainer}>
                    <Text style={Styles.recipeTitle} numberOfLines={1}>{recipe.title}</Text>
                  </View>
                </View>
                <Image source={{ uri: recipe.thumbnail }} style={Styles.image} />
              </View>
            </TouchableHighlight>
          })}
          {this.state.isSearching ? <Text style={Styles.searchText}>Searching ...</Text> : null}
        </ScrollView>
      </View>
    )
  }
}

export default connect()(Home);
