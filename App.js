import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class AnyColorButton extends Component{
  displayAlert(){
    alert("I told you not to click, NOW YOU PAY THE PRICE. MUAHAHAHAHHAHAHAHAHAH")
  }
  render(){
  return(
<View>
<Button title={this.props.myTitle}color = {this.props.myColor} onPress = {this.displayAlert}/>
</View>
)
  }
}

export default class App extends Component {
  
  render() {
    return (
      <View>
        <Text style={{marginTop:50}}>My first App</Text>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
      <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
      <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
      <AnyColorButton myColor = "purple" myTitle = "Click Me"/>
      <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
      <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
       <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>
      <AnyColorButton myColor = "purple" myTitle = "Don't Click Me"/>


       
        </View>
    );
  }
}