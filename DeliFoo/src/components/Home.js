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
  Dimensions,
} from 'react-native'

var { height, width } = Dimensions.get('window');

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
            placeholder='Type ingredients here'
            onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
            value={this.state.ingredientsInput}
          />
          <TouchableOpacity style={styles.searchSectionButton} onPress={() => this.searchPressed()}>
            <Text style={{color: '#fff', fontSize: 16}}>Search</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollSection} automaticallyAdjustContentInsets={false}>
          {!this.state.isSearching && this.getRecipes().map((recipe) => {
            return <TouchableHighlight 
            onPress={() => this.props.navigate({key: 'Detail', recipe: recipe})}
            key={recipe.id}>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#333333',
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Text style={{ color: '#FFF', fontSize: 16 }}>{recipe.id}</Text>
                  </View>
                  <View style={{ backgroundColor: '#993366', flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 18}} numberOfLines={1}>{recipe.title}</Text>
                  </View>
                </View>
                <Image source={{ uri: recipe.thumbnail }} style={styles.image} />
              </View>
            </TouchableHighlight>
          })}
          {this.state.isSearching ? <Text style={{ fontSize: 16, paddingLeft: 10 }}>Searching ...</Text> : null}
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
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2'
  },
  searchSectionTextInput: {
    flex: 0.7,
    paddingLeft: 10,
  },
  searchSectionButton: {
    flex: 0.3,
    backgroundColor: '#4d9900',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollSection: {
    flex: 1,
  },
  image: {
    height: 200,
  }
});

export default connect()(Home);
