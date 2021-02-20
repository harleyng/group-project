import fire from '../firebase'


const LoginHandler = props => {
  const { userName, password } = props

  fire.auth().signInWithEmailAndPassword(userName, password)
  .then((userCredential) => {
    // Signed in
    window.location.replace("/");
    var user = userCredential.user;
  })
  .catch((err) => { 
    console.log(err)
  });
}
export default LoginHandler;
