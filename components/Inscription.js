import React from 'react'
import {View,TextInput,Text,Button,StyleSheet} from 'react-native'
import * as firebase from 'firebase'

class Inscription extends React.Component{
  constructor(props){
    super(props)

    this.email=""
    this.password=""
    this.username=""
    this.finalPassword=""


  }
  _textEmail(text){
    this.email=text
  }
  _textPassword(text){
    this.password=text
  }
  _textUsername(text){
    this.username=text
  }
  _textFinalPassword(text){
    this.finalPassword=text
  }
  _createAccount(){

      if(this.finalPassword===this.password){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user)=>{
          if (firebase.auth().currentUser) {
      userId = firebase.auth().currentUser.uid;
      if (userId) {
          firebase.database().ref('users/' + userId).set({
            username: this.username,
            email:this.email
          })
      }
  }
     this.props.navigation.navigate('Connexion')
     alert('Utilisateur créé avec succès')
      })
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        if(errorCode==='auth/email-already-in-use'){
          alert("L'email que vous avez saisi est deja utilisé");
        }
        else{
          if(errorCode==='auth/invalid-email'){
            alert("L'email que vous avez saisi est invalide");
          }else{
            if(errorCode==='auth/operation-not-allowed'){
              alert("Désolé ! Opération non autorisé pour le moment ");
            }else{
               if(errorCode==='auth/weak-password'){
                 alert("Le mot de passe que vous avez saisi est faible !");
               }
            }
          }
        }
      });
    }else{
      alert("Erreur lors de la confirmation du mot de passe .Veuillez revoir le mot de passe que vous avez saisi !")
    }
  }
  render(){
    return(
     <View style={styles.main_container}>
     <Text style={styles.text}>Saisissez votre nom dutilisateur :</Text>
     <TextInput placeholder='username' style={styles.TextInput}
     onChangeText={(text)=>this._textUsername(text)}/>
     <Text style={styles.text}>Saisissez votre email :</Text>
     <TextInput placeholder='email' style={styles.TextInput} autoCorrect={false}
     onChangeText={(text)=>this._textEmail(text)}/>
     <Text style={styles.text}>Saisissez votre mot de passe :</Text>
     <TextInput placeholder='password' style={styles.TextInput} secureTextEntry={true}
     onChangeText={(text)=>this._textPassword(text)}/>
     <Text style={styles.text}>Confirmer mot de passe :</Text>
     <TextInput placeholder='confirm password' style={styles.TextInput} secureTextEntry={true}
     onChangeText={(text)=>this._textFinalPassword(text)}/>
     <Button style={styles.bouton} title='valider'  onPress={()=>this._createAccount()}/>
     </View>
    );
  }
}

const styles=StyleSheet.create({
  main_container:{
    marginTop:20,
    flex:1

  },
 text:{
  fontSize:20,
    textAlign:'center'
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
bouton:{
  margin:20
}
})

export default Inscription;
