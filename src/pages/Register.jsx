import React, { useState, useEffect } from 'react'
import { isEmail, isEmpty, isLength, isContainWhiteSpace, isPasswordMatch, isPhone, isName } from '..//validator.js';
import Swal from 'sweetalert2'

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
  const [formData, setformData] = useState({firstname: "", lastname: "", username: "", phone: "", email: "", password: "", repassword: "", DOB: "2020-01-01", religion: "", preferSite: ""})
  const [errors, seterrors] = useState({firstname: "", lastname: "", username: "",  phone: "", email: "", password: "", repassword: "",religion: "", preferSite: ""})
  const initialformValidated = {
    firstname: false,
    lastname: false,
    username: false,
    email: false, 
    password: false,
    repassword: false,
    phone:false
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
      console.log(formData);
  }

  const validateLoginForm = (e) => {
      let err = {};

      if (formData.firstname) {
        if (!isName(formData.firstname)) {
          err.firstname = "Please enter a valid first name";
        }
      }

      if (formData.lastname) {
        if (!isName(formData.lastname)) {
          err.lastname = "Please enter a valid last name";
        }
      }

      if (formData.email) {
        if (!isEmail(formData.email)) {
          err.email = "Please enter a valid email";
        }
      }

      if (formData.password) {
        if (isContainWhiteSpace(formData.password)) {
          err.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
          err.password = "Password's length must between 6 to 16";
        }
      }

      if (formData.repassword) {
        if (!isPasswordMatch(formData.password, formData.repassword)) {
          err.repassword = "Your password does not match"
        }
      }

      if (formData.phone) {
        if (!isPhone(formData.phone)) {
          err.phone = "Your phone number is not valid"
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
  
  const isFieldEmpty = () => {
    for (const key in formData) {
      if (formData[key] === "") {
        seterrors((prevData) => ({
          ...prevData,
          [key]: key + " can't be blank"
        }))
        setformValidated((prevData) => ({
          ...prevData,
          [key]: true
        }));
      }
    }
  }
  const register = (e) => {
      e.preventDefault();

      // check if any field is empty
      // yes => show error
      // no => submit
      isFieldEmpty(() => {
        const err = validateLoginForm();
        if(err === true) {
          alert("You are successfully signed in...");
          // window.location.reload()
        } else {
          // alert the first error
          Swal.fire({
            title: 'You have failed to sign up',
            text: err[Object.keys(err)[0]],
            icon: 'error'
          })
        }
      })
  }
  
  const getOptions = (start, end) => {
    const options = [];
    for(let i = start; i <= end; i++) {
      options.push(<option key={i}>{i}</option>)
    }
    return options;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
          <div className="paper">
            <Typography component="h1" variant="h5">Đăng Ký</Typography>
          </div>
            <form action="">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField  error={formValidated.firstname}
                              helperText={errors.firstname}
                              autoComplete="firstname" 
                              name="firstname" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="firstname" 
                              label="First Name" 
                              autoFocus 
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField  error={formValidated.lastname}
                              helperText={errors.lastname}
                              autoComplete="lastname" 
                              name="lastname" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="lastname" 
                              label="Last Name" 
                              autoFocus
                              onChange={handleInputChange}/>
                </Grid>

                <Grid item xs={12}>
                  <TextField  error={formValidated.username}
                              helperText={errors.username}
                              autoComplete="account" 
                              name="account" 
                              variant="outlined" 
                              required fullWidth 
                              id="account" 
                              label="Username" 
                              autoFocus
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12}>
                  <TextField  id="DOB"
                              label="DOB"
                              name="DOB"
                              type="date"
                              required fullWidth 
                              defaultValue="2020-01-01"
                              onChange={handleInputChange} />
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
                              label="Password" 
                              autoFocus
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField  error={formValidated.repassword}
                              helperText={errors.repassword}
                              autoComplete="repassword" 
                              name="repassword" 
                              type="password" 
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="repassword" 
                              label="Re-type Password" 
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
                  <TextField  error={formValidated.phone}
                              helperText={errors.phone}
                              autoComplete="phone" 
                              name="phone"
                              variant="outlined" 
                              required 
                              fullWidth 
                              id="phone" 
                              label="Phone Number" 
                              autoFocus
                              onChange={handleInputChange} />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel 
                    control={<Checkbox value="allowExtraEmails" color="primary" />} 
                    label="Receive newest notifications and discount"/>
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
