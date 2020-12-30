import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MasterLayout from './layouts/master/MasterLayout'
import Register from './pages/Register'
import Login from './pages/Login';
import Footer from './pages/Components/Footer/Footer'
import NavBar from './pages/Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <Login></Login>
      </MasterLayout>
    </div>
  );
}

export default App;
