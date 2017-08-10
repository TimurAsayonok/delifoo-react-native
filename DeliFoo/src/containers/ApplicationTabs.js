import React, {Component} from 'react'
import {View, TabBarIOS} from 'react-native'
import { connect } from 'react-redux'
import Home from '../components/Home'
import Contacts from '../components/Contacts'

class ApplicationTabs extends React.Component {
  constructor(props) {
    super(props)
  }

  renderScene(component){
    return<View style={{flex:1}}>
        {React.createElement(component, this.props)}
      </View>
  }

  onPress(index){
    this.props.setTab(index);
  }

  render() {
    console.log(this.props);
    return (
      <TabBarIOS style={{flex:1}}>
        <TabBarIOS.Item
          selected={this.props.tabs.index === 0}
          onPress={ () => {this.onPress(0)}}
          systemIcon="favorites"
          title="Home"
          iconSize={25}>
          {this.renderScene(Home)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          onPress={ () => {this.onPress(1)}}
          selected={this.props.tabs.index === 1}
          systemIcon="contacts"
          title="Contacts"
          iconSize={25}>
          {this.renderScene(Contacts)}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

function mapStateToProps(state){
  return {
    tabs: state.tabs
  }
}

export default connect(mapStateToProps)(ApplicationTabs);
