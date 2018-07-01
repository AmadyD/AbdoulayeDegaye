import { createStackNavigator,createBottomTabNavigator } from 'react-navigation'
import Authentication from'../components/authentication'
import Inscription from '../components/Inscription'
import Loggedin from '../components/LoggedIn'
const SearchStackNavigator = createStackNavigator({
  Connexion: {
    screen: Authentication,
    navigationOptions: {
      title: 'Connectez-vous'
    }
  },
  Inscription:{
    screen: Inscription,
    navigationOptions: {
      title: 'Inscrivez-vous'
    }
  },
  Accueil:{
    screen: Loggedin
  }
})


export default SearchStackNavigator
