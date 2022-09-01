import { useEffect, useState } from "react";
import style from "../../css/theme.module.css"

export const Input = function({name, label, type, validators, classNames, defaultValue, onKeyDown, onChange}) {

    const [value, setValue] = useState(defaultValue);
    const [err, setErr] = useState("")

    useEffect(() => {
        console.log(value);
        if (!validators) { onChange(value); return; }
        setErr("");
    
        let mustChangeValue = true;
        for(const validator of validators) {
            const vResponse = validator(value);
            console.log(vResponse);
            if (!vResponse.state) {
                mustChangeValue = false;
                setErr(vResponse.message)
            }
        }

        if(mustChangeValue) {
            onChange(value);
        }
    }, [value])
    // const change = (e) => {
    //     if (value == e.target.value) return;
    //     if (!validators) {
    //         onChange(e.target.value);
    //         return;
    //     }
    //     setErrors({...errors, [name]: ""})
    //     for (const index in validators) {
            
    //         const validator = validators[index];
    //         console.log(validator);
    //         const res = validator(e.target.value);
    //         if (!res.state) {
    //             setErrors({...errors, [name]: res.message})
    //             onChange(e.target.value);
    //             return;
    //         }
    //     }
    //     onChange(e.target.value);
    // }


    return (
        <>
            { label ? <div className={classNames['label']}>
                <label htmlFor={name} className="form-label">{label}</label>
            </div> : ""}
            <div className={classNames['input']}>
                <div>
                    <input type={type} name={name} className="form-control" onChange={(e) => setValue(e.target.value)} onKeyDown={onKeyDown}
                    value={value}/>
                </div>
                <div className="error">
                    { err }
                </div>
            </div>
        </>
    )
}