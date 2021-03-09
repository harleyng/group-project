import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const BookingForm = () => {
    const Time = [
            {
                id: 1,
                showorder: ['8:30', '11:30', '13:30', '15:30', '17:30', '19:30', '20:30', '22:30', '23:30']
            },
        ]
    
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();

    return (
        <div>
            <div className="bookingForm">
                <div className="location-pick">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select">City</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                            <option aria-label="None" value="" />
                            <option value={1}>TICKETLAND HA NOI</option>
                            <option value={2}>TICKETLAND HO CHI MINH</option>
                            <option value={3}>TICKETLAND DA NANG</option>
                        </Select>
                    </FormControl>  

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-native-select">Street</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                            <option aria-label="None" value="" />
                            <option value={1}>TICKETLAND DAO TAN</option>
                            <option value={2}>TICKETLAND HOANG QUOC VIET</option>
                            <option value={3}>TICKETLAND THANH CONG</option>
                        </Select>
                    </FormControl>
                </div>
                <div className="listOfDay">
                    <ul class="detail__listOfDay">
                        <li class="detail__listOfDay--item active"><p class="dayOfWeek">01</p><p class="date">Mon</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">02</p><p class="date">Tue</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">03</p><p class="date">Wed</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">04</p><p class="date">Thurs</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">05</p><p class="date">Fri</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">06</p><p class="date">Sat</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">07</p><p class="date">Sun</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">08</p><p class="date">Mon</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">09</p><p class="date">Tue</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">10</p><p class="date">Wed</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">11</p><p class="date">Thurs</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">12</p><p class="date">Fri</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">13</p><p class="date">Sat</p></li>
                        <li class="detail__listOfDay--item "><p class="dayOfWeek">14</p><p class="date">Sun</p></li></ul>
                </div>
                <div className="time">
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained">Default</Button>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
