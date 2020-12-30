import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MasterLayout from './layouts/master/MasterLayout'
import Register from './pages/Register'
import Login from './pages/Login';
import './assets/css/base.scss'
function App() {
  return (
    <div className="App">
      <MasterLayout>
        <Login />
      </MasterLayout>
    </div>
  );
}

export default App;
