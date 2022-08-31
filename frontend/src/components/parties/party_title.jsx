import { useState } from "react";
import style from "../css/theme.module.css"


const PartyTitleForm = ({onTitleForm}) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-2"></div>
                        <div><h1>Enter an awesome party title1</h1></div>
                    </div>
                    <div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="partytitle" className="form-label">Sex</label>
                            </div>
                            <div className="col-4">
                                <input type="text" name="partytitle" className="form-control" placeholder="title"
                                value={title} onChange={(e) => {setTitle(e.target.value);}} required>
                                </input>
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

export default PartyTitleForm