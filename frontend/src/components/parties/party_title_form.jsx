import { useState } from "react";
import style from "../css/theme.module.css"

import { Input } from "../generic/forms/input";


const PartyTitleForm = ({onTitleForm}) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = document.forms[0];
        if (form.checkValidity() === false) {
            form.reportValidity();
            return
        }
        onTitleForm({"partytitle": title});
    }

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form onSubmit={(e) => handleSubmit(e)} name="party_title_form">
                    <div className="row mb-4">
                        <div className="col-2"></div>
                        <div><h1>Enter an awesome party title!</h1></div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-1"></div>
                        <Input name="partytitle" classNames={{"label": "col-1", "input": "col-10"}} placeholder="title" value={title} onChange={setTitle}/>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-5">
                            <input type="submit" className={"form-control " + style.big_info_submit} onClick={handleSubmit}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default PartyTitleForm