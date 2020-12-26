import React, { useState } from 'react'
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
  const [formData, setformData] = useState({name: "", phone: "", email: "", password: "", repassword: "", DOB: "", religion: "", preferSite: ""})
  const [errors, seterrors] = useState({name: "", phone: "", email: "", password: "", repassword: "", DOB: "", religion: "", preferSite: ""})
  const [formSubmitted, setformSubmitted] = useState(false)
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
      console.log(formData);
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
      let errors = {};
      if (isEmpty(formData.email)) {
          errors.email = "Email can't be blank";
      } else if (!isEmail(formData.email)) {
          errors.email = "Pleade enter a valid email";
      }

      if (isEmpty(formData.password)) {
          errors.password = "Password can't be blank";
      }  else if (isContainWhiteSpace(formData.password)) {
          errors.password = "Password should not contain white spaces";
      } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
          errors.password = "Password's length must between 6 to 16";
      }

      if (isEmpty(errors)) {
          return true;
      } else {
          return errors;
      }
  }

  const login = (e) => {
      e.preventDefault();

      let err = validateLoginForm();

      if(err === true) {
          alert("You are successfully signed in...");
          window.location.reload()
      } else {
          seterrors(err);
          setformSubmitted(true);
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
                  <TextField autoComplete="firstname" name="firstname" variant="outlined" required fullWidth id="firstname" label="Họ" autoFocus/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" label="Tên" autoFocus/>
                </Grid>

                <Grid item xs={12}>
                  <TextField autoComplete="account" name="account" variant="outlined" required fullWidth id="account" label="Tài khoản" autoFocus/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="password" name="password" type="password" variant="outlined" required fullWidth id="password" label="Mật khẩu" autoFocus/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="password2" name="password2" type="password" variant="outlined" required fullWidth id="password" label="Xác Nhận Mật Khẩu" autoFocus/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email" autoFocus/>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="phone" name="phone" variant="outlined" required fullWidth id="phone" label="Số Điện Thoại" autoFocus/>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Nhận Các Thông Báo Và Ưu Đãi Mới Nhất"/>
                </Grid>
              </Grid>
              
                <Button type="submit" fullWidth variant="contained" color="primary" className="submit">Đăng ký</Button> 
            </form>
    </Container>
  )
}

export default Register
