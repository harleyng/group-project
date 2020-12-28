import React, { useState, useEffect } from 'react'
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '..//validator.js';

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

const Register = () => {
  const [formData, setformData] = useState({firstname: "", lastname: "", phone: "", email: "", password: "", repassword: "", DOB: "", religion: "", preferSite: ""})
  const [errors, seterrors] = useState({firstname: "", lastname: "", phone: "", email: "", password: "", repassword: "", DOB: "", religion: "", preferSite: ""})
  const initialformValidated = {
    email: false, 
    password: false
  };
  const [formValidated, setformValidated] = useState(initialformValidated)
  const [loading, setloading] = useState(false)
  const [day, setday] = useState(null)
  const [month, setmonth] = useState(null)
  const [year, setyear] = useState(null)

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setformData(prevData => ({
          ...prevData,
          [name]: value
      }))
      // console.log(formData);
  }
  const handleDOBChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "day":
        setday(value)
        break;
      case "month":
        setmonth(value)
        break;
      case "year":
        setyear(value)
        break;
    }
    if(day && month && year) {
      setformData(prevData => ({
        ...prevData,
        DOB: new Date(year, month - 1, day)
      }));
    } 
    console.log(formData);
}

  const validateLoginForm = (e) => {
      let err = {};
      if (formData.email) {
        if (isEmpty(formData.email)) {
          err.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
          err.email = "Pleade enter a valid email";
        }
      }

      if (formData.password) {
        if (isEmpty(formData.password)) {
          err.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
          err.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
          err.password = "Password's length must between 6 to 16";
        }
      }
      seterrors(err)
      if (isEmpty(err)) {
        // change all value of formValidated to initial
        setformValidated(initialformValidated)
        return true;
      } else {
        // change value based on key of local err object
        for (const key in err) {
          setformValidated((prevData) => ({
            ...prevData,
            [key]: true
          }));
        }
        return err;
      }
  }

  useEffect(() => {
    return () => {
      validateLoginForm();
    }
  }, [formData])
  
  const register = (e) => {
      e.preventDefault();

      let err = validateLoginForm();
      if(err === true) {
        alert("You are successfully signed in...");
        window.location.reload()
      } else {
        // alert the first error
        alert(err[Object.keys(err)[0]]);
      }
  }
  
  const getOptions = (start, end) => {
    const options = [];
    for(let i = start; i <= end; i++) {
      options.push(<option key={i}>{i}</option>)
    }
    return options;
  }

  const thisYear = new Date().getFullYear();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
          <div className="paper">
            <Typography component="h1" variant="h5">Đăng Ký</Typography>
          </div>
            <form action="">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField  autoComplete="firstname" 
                              name="firstname" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="firstname" 
                              label="Họ" 
                              autoFocus 
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="lastname" 
                              name="lastname" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="lastname" 
                              label="Tên" 
                              autoFocus/>
                </Grid>

                <Grid item xs={12}>
                  <TextField autoComplete="account" 
                              name="account" 
                              variant="outlined" 
                              required fullWidth 
                              id="account" 
                              label="Tài khoản" 
                              autoFocus
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12}>
                  <TextField id="dob"
                              label="Ngày Sinh"
                              type="date"
                              required fullWidth 
                              defaultValue="2020-01-01"/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField  error={formValidated.password}
                              helperText={errors.password}
                              autoComplete="password" 
                              name="password" 
                              type="password" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="password" 
                              label="Mật khẩu" 
                              autoFocus
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="repassword" 
                              name="repassword" 
                              type="password" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="repassword" 
                              label="Xác Nhận Mật Khẩu" 
                              autoFocus
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField  error={formValidated.email}
                              helperText={errors.email}
                              autoComplete="email" 
                              name="email" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="email" 
                              label="Email" 
                              autoFocus
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="phone" 
                              name="phone"
                               variant="outlined" 
                               required 
                               fullWidth 
                               id="phone" 
                               label="Số Điện Thoại" 
                               autoFocus
                               onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel 
                    control={<Checkbox value="allowExtraEmails" color="primary" />} 
                    label="Nhận Các Thông Báo Và Ưu Đãi Mới Nhất"/>
                </Grid>
              </Grid>
              
                <Button type="submit" 
                        fullWidth 
                        variant="contained" 
                        color="primary" 
                        className="submit"
                        onClick={register}>Đăng ký</Button> 
            </form>
    </Container>
  )
}

export default Register
