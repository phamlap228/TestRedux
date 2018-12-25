import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import {connect} from 'react-redux';
import {fetchDataSuccess} from '../actions';

export class Employee extends Component {
  constructor(props){
    super(props);
    this.state={
      text:''
    }
  }
  // componentWillReceiveProps(){
  //   this.setState({
  //     text:this.props
  //   })
  // }
  render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={
              ()=>{
                this.props.fetchDataSuccess(),
                console.log("props: "+JSON.stringify(this.props))
              }
            }>
              <Text >Click me </Text>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                {
                    this.props.data.dataFetched===false && <Text>Loading...</Text>
                }
                {
                    this.props.data.data.length ? (
                      this.props.data.data.map((employee,i)=>{
                            return<View key={i}>
                                <Text>Name: {employee.name} - {employee.edu}</Text>
                            </View>
                        })
                    ) : null 
                }
            </View>
            
            
      </View>
    )
  }
}

const mapStateToProps = (state) => { 
    return{
        data:state.fetchReducer
    }
};
const styles =StyleSheet.create({
  container:{flex: 1, alignItems:'center', marginTop:20},
  button:{
    borderRadius:20,
    alignItems: 'center',
    width:200,
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'orange'
  }  
});
export default connect(mapStateToProps,{fetchDataSuccess})(Employee);
