import React, { useState } from 'react'
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '..//validator.js';

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
    <div>
      <form novalidate>
        <div className="form-group">
          <input type="text" className="form-control" id="NameRegister" name="name" placeholder="Name" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <input type="number" className="form-control" id="PhoneRegister" name="phone" placeholder="Phone Number" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="EmailRegister" name="phonne" aria-describedby="emailHelp" placeholder="Email" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="PasswordRegister" name="password" placeholder="Password" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="RetypePasswordRegister" name="repassword" placeholder="Re-type Password" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <div className="row">
            <div className="col-3">
              <select className="form-control" id="DateRegister" name="day" onChange={handleDOBChange}>
                <option selected disabled>Day</option>
                {getOptions(1, 31)}
              </select>
            </div>
            <div className="col-3">
              <select className="form-control" id="MonthRegister" name="month" onChange={handleDOBChange}>
                <option selected disabled>Month</option>
                {getOptions(1, 12)}
              </select>
            </div>
            <div className="col-3">
              <select className="form-control" id="YearRegister" name="year" onChange={handleDOBChange}>
                <option selected disabled>Year</option>
                {getOptions(thisYear - 20, thisYear)}
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <select className="form-control" id="Religion" name="religion" title="Religion" onChange={handleInputChange}>
            <option selected disabled>Religion</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" id="PreferSite" name="preferSite" onChange={handleInputChange}>
            <option selected disabled>Prefer Site</option>
          </select>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="PrivacyAcceptance"/>
          <label className="form-check-label" for="PrivacyAcceptance">I accept the privacy statement</label>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Register
