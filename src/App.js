import logo from './logo.svg';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/base.scss'
import './assets/css/home.scss'
import './assets/css/movie.scss'
import './assets/css/booking.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import MasterLayout from './layouts/master/MasterLayout'
import Register from './pages/Register'
import Login from './pages/Login';
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie'

import BookingForm from './components/Detail-Movie/BookingForm'
import Booking from './pages/Booking'


function App() {
  return (
    <div className="App">
      <MasterLayout>
        <BrowserRouter> 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/movie/:movieId" component={DetailMovie}/>
              <Route exact path="/movie/:movieId/booking/:theaterId/:roomId" component={Booking}/>
            </Switch>
        </BrowserRouter>
      </MasterLayout>
    </div>
  );
}

export default App;
