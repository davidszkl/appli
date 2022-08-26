import { useState } from "react"
import style from "./register_form.module.css"
import Optionlist from "./option_list"

const UserInfoForm = ({onInfoForm}) => {
    const [sex, setSex] = useState('Male')
    const [age, setAge] = useState('18')

    const handleSubmit = (e) => {
        e.preventDefault();
        onInfoForm({"userage": age, "usersex": sex});
    }

    const sexes = [
        {name: "male", value: "Male"},
        {name: "female", value: "Female"},
        {name: "other", value: "Other"},
    ]

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-2"></div>
                        <div><h1>Some more information...</h1></div>
                    </div>
                    <div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="usersex" className="form-label">Sex</label>
                            </div>
                            <div className="col-4">
                                <select type="select" name="usersex" className="form-control" placeholder="sex"
                                value={sex} onChange={(e) => {setSex(e.target.value);}} required>
                                    <Optionlist options={sexes}/>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="userage" className="form-label">Age</label>
                            </div>
                            <div className="col-3">
                                <input type="number" name="userage" className="form-control" placeholder="18"
                                value={age} onChange={(e) => {setAge(e.target.value);}} required/>
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

export default UserInfoForm