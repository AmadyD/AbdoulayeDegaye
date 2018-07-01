
import * as firebase from 'firebase'

const config = {
   apiKey: "AIzaSyBYtw5Vzh8pDRxtFlHHl2MCV88aLR5GFMo",
   authDomain: "postit-5f612.firebaseapp.com",
   databaseURL: "https://postit-5f612.firebaseio.com",
   projectId: "postit-5f612",
   storageBucket: "postit-5f612.appspot.com",
   messagingSenderId: "785830161352"
 };


export default class Firebase{
 static auth;
  static init(){
    firebase.initializeApp(config);
    Firebase.auth=firebase.auth();
  }
}
