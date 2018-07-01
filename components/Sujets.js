import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

class Sujets extends React.Component{

  render(){
    const data=this.props.item
    return(
      <View style={styles.main_container}>
      <View style={styles.titre}>
       <Text style={styles.titreText}>{data.titre}</Text>
      </View>
      <View style={styles.appreciation}>
       <Text style={styles.appreciationText}>votes positifs:{data.votePos}  | <Text>votes negatifs:{data.voteNeg}</Text></Text>
      </View>
      <View style={styles.contenu}>
        <Text>{data.description}</Text>
      </View>
      <View style={styles.end}>
      <Text>publié par :{data.auteur}        |</Text>
      <Text style={styles.dateText}>  publié le {data.date}</Text>
      </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  main_container:{
    flex:1,
    marginTop:30
  },
  titre:{
    flex:2
  },
  appreciation:{
    flex:1
  },
  contenu:{
    flex:6,
    margin:15
  },
  end:{
    flex:1,
    flexDirection:'row',
    margin:15
  },
  titreText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:25
  },
  appreciationText:{
    textAlign:'right'
  },
  dateText:{
    justifyContent:'flex-end'
  }

});
export default Sujets
