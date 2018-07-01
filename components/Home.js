import React from 'react'
import {View,StyleSheet,Text,FlatList,ActivityIndicator} from 'react-native'
import Sujets from './Sujets'
import * as firebase from 'firebase'
class Home extends React.Component{
  constructor(props){
    super(props)
    this.username=""
    this.state={
      data:[],
      isLoading: false
    }
  }
  _getItems = (snap, items) => {
      snap.forEach((child) => {
          items.push({
              key: child.key,
              titre: child.val().titre,
              description: child.val().description,
              date:child.val().datePubli,
              auteur:child.val().auteur,
              votePos:child.val().votePos,
              voteNeg:child.val().voteNeg
          });
      });
  }
   _makeRemoteRequest = () => {
    const rootRef=firebase.database().ref();
    const sujetRef=rootRef.child('sujets');
    sujetRef.on('value', (snap) => {
        var items = [];
        this._getItems(snap, items);
        items = items.reverse();
        this.setState(
            {data: items}
        );
    });
}
componentWillMount(){
  this.setState({isLoading:true})
  this._makeRemoteRequest()

}
componentDidMount(){
  this.setState({isLoading:false})
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

    return(

      <View>

        <Text style={styles.bienvenue}>Voici la liste des sujets disponibles</Text>
        <FlatList
                   data={this.state.data}
                   renderItem={({item}) => <Sujets item={item} />}
               />
               {this._displayLoading()}
      </View>
    );
  }
}
const styles=StyleSheet.create({
  bienvenue:{
    textAlign:'center',
    fontSize:25
  },
 email:{
   fontWeight:'bold'
 },
 loading_container:{
  position: 'absolute',
  left: 0,
  right: 0,
  top: 100,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center'
}
});

export default Home;
