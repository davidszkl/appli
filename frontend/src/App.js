import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegisterRoot from './components/user/user_auth/user_register_root.jsx';
import UserLoginForm from './components/user/user_auth/user_login_form';
import NavBar from './components/generic/navbar';
import HomePage from './components/home_page';
import TemplateRequest from './components/generic/template_component';

import ProfilePage from './routes/profile_route';

export const backend_url = "http://127.0.0.1:8080";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="login" element={<UserLoginForm/>}/>
                <Route path="register" element={<UserRegisterRoot/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="test" element={<TemplateRequest/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;