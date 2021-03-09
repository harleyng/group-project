import React, { useState } from 'react';
import fire from '../backend/firebase'

// Material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";



const Login = () => {
    const [formData, setformData] = useState({email: "", password: ""})
    // const [user, setUser] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setformData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const LoginHandler = () => {
        fire.auth().signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          window.location.replace("/");
        })
        .catch((err) => { 
          console.log(err)
        });
      }
    return (
        <div className="LoginContainer">
            <div className="LoginContent">
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className="paper">
                        <Typography component="h1" variant="h5" className="sign-in mb-3">Sign In</Typography>
                        <form action="">
                            <TextField variant="outlined" 
                                    margin="normal" 
                                    required fullWidth 
                                    id="email" 
                                    label="Email" 
                                    name="email" 
                                    autoFocus
                                    onChange={handleInputChange}/>

                             <TextField variant="outlined" 
                                    margin="normal" 
                                    required fullWidth 
                                    name="password" 
                                    label="Password" 
                                    type="password" 
                                    id="password"
                                    onChange={handleInputChange}/>

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember Me"
                                id="remember"
                            />

                            <Button 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary"
                                    onClick={() => {
                                        LoginHandler()
                                    }}
                                    >Sign In</Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="/register" variant="body2">
                                        Register ?
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Login
