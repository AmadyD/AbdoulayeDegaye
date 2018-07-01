import React from 'react'
import {View,StyleSheet,Text,TextInput,Button} from 'react-native'
import * as firebase from 'firebase'
class Profile extends React.Component{
  constructor(props){
    super(props)
    this.titre=""
    this.description=""
    this.username=""
    this.date=""
    let username;
  }

  _setTitle(text){
    this.titre=text
  }
  _setComments(text){
    this.description=text
  }
  _insertData(){

    var userId=firebase.auth().currentUser.uid
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
     username = snapshot.val().username;

     });
    const rootRef=firebase.database().ref();
    const sujetRef=rootRef.child('sujets');
    var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;

      var yyyy = today.getFullYear();
       if(dd<10){
        dd='0'+dd;
          }
      if(mm<10){
       mm='0'+mm;
       }
      var today = dd+'/'+mm+'/'+yyyy;

    sujetRef.push({
      titre:this.titre,
      description:this.description,
      votePos:0,
      voteNeg:0,
      datePubli:today,
      auteur:username
    });

  }
  render(){
    return(
      <View>
       <Text style={styles.sujet}>Publier un nouveau sujet</Text>
       <Text style={styles.text}>Saisissez le titre de votre sujet</Text>
       <TextInput placeholder='titre' style={styles.Titre}
       onChangeText={(text)=>this._setTitle(text)}/>
       <Text style={styles.text}>Ajouter une description</Text>
       <TextInput placeholder='description...' multiline = {true}
       numberOfLines = {4}
       style={styles.description}
       onChangeText={(text)=>this._setComments(text)}/>
       <Button title='Publier' onPress={()=>this._insertData()} style={styles.bouton}/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  main_container:{
    flex:1

  },
  sujet:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:25,
    color:'#34495e'
  },
  text:{
  textAlign:'center',
  fontSize:15
  },
  Titre:{
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    margin:20,
    textAlign:'center',
    fontSize:20
  },
  description:{
    borderColor: '#000000',
    borderWidth: 1,
    margin:20,
    textAlign:'center',
    fontSize:20
  },
  bouton:{

  }
})
export default Profile
