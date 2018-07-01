import React from 'react'
import {View,TextInput,Button,StyleSheet,Text,ActivityIndicator} from 'react-native'
import Inscription from './Inscription'
import * as firebase from 'firebase'
class Authentication extends React.Component{

  constructor(props){
    super(props)

    this.email=""
    this.password=""
    this.state={
      isLoading:false
    }
  }
  _loadScreen(){
     this.props.navigation.navigate('Inscription')
  }
  _textEmail(text){
    this.email=text
  }
  _textPassword(text){
    this.password=text
  }
  _signIn(){
    if(this.email.length>0 && this.email.length>0){
      this.setState({isLoading:true})
    }
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((user)=>{
      this.setState({isLoading:false})
      this.props.navigation.navigate('Accueil',{email:this.email})
       firebase.auth().onAuthStateChanged(function(firebaseUser){
         if(firebaseUser){
          //alert(firebaseUser.email)
        }
    }
  )
     }).catch(function(error) {
// Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message
      //this.setState({isLoading:false})
      if(errorCode==='auth/invalid-email'){
        alert("L'email que vous avez saisi est invalide");
      }
      else{
        if(errorCode==='auth/user-disabled'){
          alert("Cet utilisateur a été désactivé");
        }else{
          if(errorCode==='auth/user-not-found'){
            alert("Désolé ! Aucun utilisateur ne correspond à cet adresse mail");
          }else{
             if(errorCode==='auth/wrong-password'){
               alert("Le mot de passe que vous avez saisi est incorrect !");
             }
          }
        }
      }

// ...
      });
        /*
      firebase.auth().onAuthStateChanged(function(firebaseUser){
        if(firebaseUser){
          alert(firebaseUser.email)
        }else{
          alert("Utilisateur non defini dans la base de données")
        }
      }
    )*/
      //const promise=firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      //promise.catch(e=>alert(e));


  }
  _displayLoading(){
    if(this.state.isLoading){
      return(
        <View style={styles.loading_container}>
        <ActivityIndicator size='large'/>
        </View>
      )
    }
  }
  render(){
    //const { navigate } = this.props.navigation;
    return(
      <View style={styles.main_container} >
        <Text style={styles.textInit}>Bienvenue sur <Text style={styles.textSecond}>PostIt</Text></Text>
        <TextInput style={styles.TextInput} placeholder='email' autoCorrect={false}
        onChangeText={(text)=>this._textEmail(text)}/>
        <TextInput style={styles.TextInput} placeholder='password' secureTextEntry={true}
        onChangeText={(text)=>this._textPassword(text)}/>
        <Button style={styles.button} title='sign in' onPress={() =>this._signIn()} />
        <Text style={styles.text1}>Vous débutez sur PostIt ?<Text style={styles.text2}
        onPress={() => this._loadScreen()}> Inscrivez-vous</Text></Text>
           {this._displayLoading()}
      </View>
    );
  }
}

const styles=StyleSheet.create({
  main_container:{
    flex:1,
    paddingTop:50
  },
  TextInput:{
  height: 50,
  borderColor: '#000000',
  borderWidth: 1,
  paddingLeft: 5,
  margin:20,
  textAlign:'center',
  fontSize:20

  },
  button:{
    margin:20,
    height:50,
    width:300,
    fontSize:25
  },
  text1:{
    textAlign:'center',
    marginTop:20,
    fontSize:15
  },
  text2:{
    fontWeight: 'bold',
    color:'#3498db'
  },
  textInit:{
    fontSize:30,
    textAlign:'center',
    marginBottom:50
  },
  textSecond:{
    fontWeight:'bold',
    color:'#3498db',
    fontFamily:'vincHand'
  }
})

export default Authentication;
