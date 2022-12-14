import { useState }    from "react";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { loginAction } from "../../../app/authSlice.js"
import { Link } from "react-router-dom";

import axios from "axios";

import style from "../../css/theme.module.css"
import { backend_url } from "../../../App";
import ListError from "../../generic/lists/list_error.jsx"


const UserLoginForm = () => {
    const [username, setUsername] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const url = `${backend_url}/login`;

    const handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            headers:{"Content-Type": "application/json",
                     "Access-Control-Allow-Origin": "*",}
        }

        axios.post(url, {"username": username, "userpassword": userpassword}, headers)
        .then((res) => {
            console.log(res);
            if (res.data['token']) {
                dispatch(loginAction(res.data['token']));
                navigate('/');
            }
            else {
                setErrors(null);
                for (let error in res.data.errors) {
                    const key = error;
                    const val = res.data.errors[error];

                    setErrors(prevDict => { 
                        return {...prevDict, [key]:val}})
                }
            }
        })
        .catch(e => console.log(e))

    }

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-4"></div>
                        <div><h1>Login</h1></div>
                    </div>
                    <div>
                        <div className="row mb-2 ml-2">
                            <div className="col-3">
                                <label htmlFor="username" className="form-label">username</label>
                            </div>
                            <div className="col-5">
                                <input type="text" name="username" className="form-control" placeholder="username" required
                                value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row mb-2 ml-2">
                            <div className="col-3">
                                <label htmlFor="userpassword" className="form-label">password</label>
                            </div>
                            <div className="col-5">
                                <input type="text" name="userpassword" className="form-control" placeholder="userpassword" required
                                value={userpassword} onChange={(e) => {setUserPassword(e.target.value)}}/>
                            </div>
                        </div>
                        {errors ? 
                        <div className={style.auth_error}>
                            <ListError errors={errors}/>
                        </div>
                        : ""}
                        <div className="row mb-3">
                            <div className="col-3"></div>
                            <div className="col-5">
                                <input type="submit" className={"form-control " + style.big_info_submit} onClick={handleSubmit}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span style={{paddingRight: '15px'}}>No account ?</span><Link to="/register" className="nav-item active">Register</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UserLoginForm