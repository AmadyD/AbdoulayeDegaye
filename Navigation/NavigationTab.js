import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Image } from 'react-native';

import Profile from '../components/Profile'
import Home from '../components/Home'
const TabNavigator = createBottomTabNavigator(
  {
  Annonces: {
    screen: Home,
    navigationOptions: {
    tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
      return <Image
        source={require('../Images/home.png')}
        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
    }
  }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
       tabBarIcon: () => {
         return <Image
           source={require('../Images/user.png')}
           style={styles.icon}/>
       }
     }
  }
},
{
   tabBarPosition: 'bottom',
   tabBarOptions: {
     activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
     inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
     showLabel: false, // On masque les titres
     showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
   }
 }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
export default TabNavigator
