import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import NavigationTab from '../Navigation/NavigationTab'
import * as firebase from 'firebase'
class Loggedin extends React.Component{
  constructor(props){
    super(props)
    this.username="";
  }

  componentWillMount(){
    var userId=firebase.auth().currentUser.uid
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
     this.username = snapshot.val().username;
  });
}
  render(){
    return(
      <View style={styles.main_container}>
      <Text style={styles.bienvenue}>Bienvenue <Text style={styles.email}>{this.username}</Text></Text>
      <NavigationTab style={styles.navigation}/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  main_container:{
    flex:1
  },
  bienvenue:{
    textAlign:'center',
    fontSize:25
  },
 email:{
   fontWeight:'bold'
 },
 navigation:{
   justifyContent: 'flex-end'
 }
});

export default Loggedin;
