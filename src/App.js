import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import FormContainer from './components/FormConiner/FormContainer';

function App() {




  return (
    <div className="App">
      {/* <FormContainer/> */}
      <LoginPage/>

      <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={LoginPage}/>
        <Route path='/sign-up' element={RegisterPage}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
