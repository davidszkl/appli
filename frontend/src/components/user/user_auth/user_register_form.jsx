import { useState } from "react"
import { Link } from "react-router-dom";

import style from "../../css/theme.module.css"


const UserRegisterForm = ({onRegisterForm}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegisterForm({"useremail": email, "username": username, "userpassword": password, "userconfirm": confirm});
    }

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-2"></div>
                        <div><h1>Register Form</h1></div>
                    </div>
                    <div>
                        <div className="row mb-2">
                            <div className="col-3">
                                <label htmlFor="useremail" className="form-label">E-mail</label>
                            </div>
                            <div className="col-9">
                                <input type="text" name="useremail" className="form-control" placeholder="example@gmail.com"
                                value={email} onChange={(e) => {setEmail(e.target.value);}} required/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-3">
                                <label htmlFor="username" className="form-label">username</label>
                            </div>
                            <div className="col-9">
                                <input type="text" name="username" className="form-control" placeholder="username"
                                value={username} onChange={(e) => {setUsername(e.target.value);}} required/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-3">
                                <label htmlFor="userpassword" className="form-label">Password</label>
                            </div>
                            <div className="col-9">
                                <input type="text" name="userpassword" className="form-control" placeholder="password"
                                value={password} onChange={(e) => {setPassword(e.target.value);}} required/>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-3">
                                <label htmlFor="userconfirm" className="form-label">Confirm</label>
                            </div>
                            <div className="col-9">
                                <input type="text" name="userconfirm" className="form-control" placeholder="confirm password"
                                value={confirm} onChange={(e) => {setConfirm(e.target.value);}} required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <input type="submit" className={"form-control " + style.big_submit} onClick={handleSubmit}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <span style={{paddingRight: '15px'}}>Have an account ?</span><Link to="/login" className="nav-item active">Login</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UserRegisterForm