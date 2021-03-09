import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OnShowingMovie from '../movie-booking/OnShowingMovie'
import UpCommingMovie from '../movie-booking/UpCommingMovie'

const CinemaBooking = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const classes = useStyles();

  return (
    <div className="booking-slider-item">
       <div className="booking-on-cinema">
        <Grid container spacing={2} className="grid">
            <Grid item xs={6} style={{color: "wheat"}}>
              <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-native-select" style={{color: "white"}}>City</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" style={{color: "white"}}>
                  <option aria-label="None" value="" />
                  <option value={1}>TICKETLAND HA NOI</option>
                  <option value={2}>TICKETLAND HO CHI MINH</option>
                  <option value={3}>TICKETLAND DA NANG</option>
              </Select>
              </FormControl>  
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-native-select" style={{color: "white"}}>Street</InputLabel>
              <Select native defaultValue="" id="grouped-native-select" style={{color: "white"}}>
                  <option aria-label="None" value="" />
                  <option value={1}>TICKETLAND DAO TAN</option>
                  <option value={2}>TICKETLAND HOANG QUOC VIET</option>
                  <option value={3}>TICKETLAND THANH CONG</option>
              </Select>
              </FormControl>  
            </Grid>
        </Grid>
        <OnShowingMovie/>
        <UpCommingMovie/>
      </div>
    </div>
  )
}

export default CinemaBooking
