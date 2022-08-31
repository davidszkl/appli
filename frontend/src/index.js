import React, { useEffect, useState, useContext, createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './app/store'

// export const AuthContext = createContext({
//     auth: null,
//     setAuth: () => {},
//     user: null,
//     setUser: () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// const AuthProvider = ({children}) => {
//     const [auth, setAuth] = useState();
//     const [user, setUser] = useState();
  
//     useEffect(() => {
//         setAuth(localStorage.getItem('token'))
//         setUser(localStorage.getItem('token'))
//     }, []);
  
//     return (
//       <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
//         {children}
//       </AuthContext.Provider>
//     ); 
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

// export default AuthProvider;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
