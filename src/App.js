import logo from './logo.svg';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/base.scss'
import './assets/css/home.scss'

import MasterLayout from './layouts/master/MasterLayout'
import Register from './pages/Register'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <BrowserRouter> 
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
      </MasterLayout>
    </div>
  );
}

export default App;
