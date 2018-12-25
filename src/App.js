import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import store from './configStore.js';
import Employee from './screen/Employee.js';
import MainScreen from './screen/MainScreen.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <Employee/>
        </View>
      </Provider>
    );
  }
}

export default App;
