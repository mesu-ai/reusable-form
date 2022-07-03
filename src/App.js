import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import FormContainer from './components/FormConiner/FormContainer';

function App() {




  return (
    <div className="App">
      <FormContainer/>
      
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={LoginPage}/>
        <Route path='/register' element={RegisterPage}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
