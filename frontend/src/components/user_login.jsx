import { useState } from "react";
import style from "./register_form.module.css"

const UserLogin = ({onLogin}) => {
    const [username, setUsername] = useState('')
    const [userpassword, setUserPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin({username: username, userpassword: userpassword})
    }

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-2"></div>
                        <div><h1>Login</h1></div>
                    </div>
                    <div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="username" className="form-label">username</label>
                            </div>
                            <div className="col-4">
                                <input type="text" name="username" className="form-control" placeholder="username"
                                value={username}/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="userpassword" className="form-label">userpassword</label>
                            </div>
                            <div className="col-4">
                                <input type="text" name="userpassword" className="form-control" placeholder="userpassword"
                                value={userpassword}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-5">
                                <input type="submit" className={"form-control " + style.big_info_submit} onClick={handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UserLogin