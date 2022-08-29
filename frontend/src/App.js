import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegisterRoot from './components/user/user_auth/user_register_root.jsx';
import UserLoginForm from './components/user/user_auth/user_login_form';
import NavBar from './components/generic/navbar';
import TemplateRequest from './components/generic/template_request';

export const backend_url = "http://127.0.0.1:8080";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<h1>HomePage</h1>}/>
                <Route path="login" element={<UserLoginForm/>}/>
                <Route path="register" element={<UserRegisterRoot/>}/>
                <Route path="test" element={<TemplateRequest/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;