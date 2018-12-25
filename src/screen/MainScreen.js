import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import API from './../API.js';
export default class MainScreen extends Component {
     constructor(props){
         super(props);
         this.state={
             data:[],
             isFetching:false,
         }
     }
     getData(){
        API().then((res) => {
           this.setState({
               data:res,
               isFetching:true,
           }) 
        }).catch((err) => {
            console.log(err);
        });
     }
  render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={this.getData.bind(this)}>
                <Text>Click me!</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                {
                    this.state.isFetching===false && <Text>Loading...</Text>
                }
                {
                    this.state.data.length ? (
                        this.state.data.map((employee,i)=>{
                            return<View key={i}>
                                <Text>Name: {employee.name} - {employee.edu}</Text>
                            </View>
                        })
                    ) : null 
                }
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'aqua',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
