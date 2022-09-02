import { useEffect, useState } from "react";
import style from "../../css/theme.module.css"

export const Input = function({name, label, type, validators, classNames, value, onKeyDown, onChange, id, placeholder, notRequired}) {

    // const [valueIn, setValueIn] = useState(value);
    const [err, setErr] = useState("")

    useEffect(() => {
        if (!validators) return;
        setErr("");
    
        let mustChangeValue = true;
        for(const validator of validators) {
            const vResponse = validator(value);
            if (!vResponse.state) {
                mustChangeValue = false;
                setErr(vResponse.message);
            }
        }
    }, [value])

    return (
        <>
            { label ? <div className={classNames['label']}>
                <label htmlFor={name} className="form-label">{label}</label>
            </div> : ""}
            <div className={classNames['input']}>
                <div>
                    <input type={type} id={id} name={name} className="form-control" onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown}
                    value={value} required={notRequired ? false : true} placeholder={placeholder}/>
                </div>
                <div className="error">
                    { err }
                </div>
            </div>
        </>
    )
}