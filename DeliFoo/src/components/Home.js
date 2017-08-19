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
      <View style={styles.scene}>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchSectionTextInput}
            returnKeyType='search'
            placeholder='Type ingredients here (comma delimited)'
            onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
            value={this.state.ingredientsInput}
          />
          <TouchableOpacity style={styles.searchSectionButton} onPress={() => this.searchPressed()}>
          <Text>Search Recipes</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollSection}>
          {!this.state.isSearching && this.getRecipes().map((recipe) => {
            return <View style={styles.recipeSection} key={recipe.title}>
              <Image source={{uri: recipe.thumbnail}} style={styles.image} />
              <Text style={styles.title}>{recipe.title}</Text>
            </View>
          })}
          {this.state.isSearching ? <Text>Searching ...</Text> : null}
        </ScrollView>
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
    height: 150
  }
});

export default connect()(Home);
