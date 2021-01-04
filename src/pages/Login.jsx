import React, {useState} from 'react';

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
    // const [userName, setuserName] = useState(null)
    // const [password, setpassword] = useState(null)
    
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
                                    id="userName" 
                                    label="Account" 
                                    name="userName" 
                                    autoFocus/>

                             <TextField variant="outlined" 
                                    margin="normal" 
                                    required fullWidth 
                                    name="password" 
                                    label="Password" 
                                    type="password" 
                                    id="password"/>

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember Me"
                            />

                            <Button type="submit" 
                                    fullWidth 
                                    variant="contained" 
                                    color="primary">Sign In</Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forget Password?
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
