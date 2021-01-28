import { Redirect } from 'react-router-dom';
import firebase from '../firebase'


const LoginHandler = props => {
  const { userName, password } = props
  console.log('signed')

  firebase.auth().signInWithEmailAndPassword(userName, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
  })
  .catch((err) => { 
    console.log(err)
  });
}
export default LoginHandler;
