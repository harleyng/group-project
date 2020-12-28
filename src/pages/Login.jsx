import React, {useState} from 'react';

// Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const Login = () => {
    const [userName, setuserName] = useState(null)
    const [password, setpassword] = useState(null)
    
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className="paper">
                    <Typography component="h1" variant="h5">Đăng Nhập</Typography>
                    <form action="">
                        <TextField variant="outlined" 
                                   margin="normal" 
                                   required fullWidth 
                                   id="userName" 
                                   label="Tài Khoản" 
                                   name="userName" 
                                   autoFocus/>

                        <TextField variant="outlined" 
                                   margin="normal" 
                                   required fullWidth 
                                   name="password" 
                                   label="Mật Khẩu" 
                                   type="password" 
                                   id="password"/>

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Ghi nhớ đăng nhập"
                        />

                        <Button type="submit" 
                                fullWidth 
                                variant="contained" 
                                color="primary">Đăng Nhập</Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Quên mật khẩu?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
