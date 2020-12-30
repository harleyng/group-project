import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MasterLayout from './layouts/master/MasterLayout'
import Register from './pages/Register'
import Login from './pages/Login';
import './assets/css/base.scss'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <BrowserRouter> 
            <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
      </MasterLayout>
    </div>
  );
}

export default App;
