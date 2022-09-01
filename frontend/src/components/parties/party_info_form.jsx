import { useEffect, useState } from "react";

import axios from "axios";

import { backend_url } from "../../App";
import { Input } from "../generic/forms/input";
import style from "../css/theme.module.css"
import ItemList from "../generic/lists/item_list";
import Optionlist from "../generic/option_list";
import { Select } from "../generic/forms/select";


const PartyInfoForm = ({onInfoForm}) => {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [ageMin, setAgeMin] = useState(0);
    const [ageMax, setAgeMax] = useState(120);
    const [tags, setTags] = useState([]);
    const [currTag, setCurrTag] = useState("");
    const [sexes, setSexes] = useState([]);
    const [currSex, setCurrSex] = useState("");
    const [dbSexes, setDbSexes] = useState([]);
    const [errors, setErrors] = useState({});

    
    const handleSubmit = (e) => {
        e.preventDefault();
        onInfoForm(start);
    }

    const handleKeyDown = (e, listtype) => {
        if (e.key !== 'Enter') {
            return;
        }
        
        e.preventDefault();
        if (listtype === 'tag')
        {
            if (currTag.trim().length > 1) {
                if (tags.includes(currTag)) {

                    return;
                }

                setTags([...tags, currTag]);
                setCurrTag("");
            }
        } else if (listtype === 'sex')
        {
            if (currSex.trim().length > 1) {
                setSexes([...sexes, currSex]);
                setCurrSex("");
            }
        }
    }

    const handleDelEvent = (index, type) => {
        if (type === 'tag') {
            const cpy = [...tags];
            cpy.splice(index, 1);
            cpy.length < 1 ? setTags([]) : setTags(cpy);
        } else if (type === 'sex') {
            const cpy = [...sexes];
            cpy.splice(index, 1);
            cpy.length < 1 ? setSexes([]) : setSexes(cpy);
        }
    }

    const updateSelect = (e) => {
        console.log(e.target.value);
        setCurrSex(e.target.value);
        setSexes([...sexes, e.target.value]);
    }

    useEffect(() => {
        const url = backend_url + "/sexes";
        const headers = {
            headers:{"Content-Type": "application/json",
                     "Access-Control-Allow-Origin": "*"}
        }
    
        axios.get(url, headers)
        .then(res => {
            setDbSexes(res.data.map((sex) => {
                return {"name": sex, "value": sex}
            }));
        })
        .catch(e => console.log(e));
    }, [])

    const startDateValidator = (value) => {
        const today = new Date();
        const date = new Date(value);
        console.log(date < today);
        if (date < today)
            return {state: false, message: "start date can't be in the past"}
        return {state: true}
    }

    const endDateValidator = (value) => {
        if (value < start)
            return {state: false, message: "end date can't be before start date"}
        return {state: true}
    }

    const ageMinValidator = (value, min, max) => {
        const valueIn = parseInt(value);
        if (valueIn < min || value > max)
            return {state:false, message:"age should be between 0 and 120"}
        if (valueIn > ageMax) {
            return {state:false, message:"minimum age should be smaller than maximum age"}
        }
        return {state: true};
    }

    const ageMaxValidator = (value, min, max) => {
        const valueIn = parseInt(value);
        if (valueIn < min || value > max)
            return {state:false, message:"age should be between 0 and 120"}
        if (valueIn < ageMin) {
            return {state:false, message:"maximum age should be bigger than minimum age"}
        }
        return {state: true};
    }

    const testValidator = (value, a) => {
        return {state: true};
    }

    const setAgeMinWrapper = (e) => {
        setAgeMin(e);
        // console.log(ageMin);
    }

    const setAgeMaxWrapper = (e) => {
        setAgeMax(e);
        // console.log(ageMax);
    }

    const test = (val) => {
        // console.log(val);
        setCurrTag(val);
    }

    return (
        <>
            { currSex }
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-2"></div>
                        <div><h3>Some more info about your party...</h3></div>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <Input name="partystart" label="start/end" type="datetime-local" validator={startDateValidator} onChange={setStart} classNames={{"label": "col-2", "input": "col-5"}} value={start}/>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <Input name="partyend" label=" " type="datetime-local" validator={endDateValidator} onChange={setEnd} classNames={{"label": "col-2", "input": "col-5"}} value={end}/>
                    </div>
                    <div className="row mb-2 align-items-top">
                        <Input name="ageMin" label="age range" type="number" onChange={setAgeMinWrapper} classNames={{"label": "col-2", "input": "col-2"}} defaultValue={ageMin} errors={errors} setErrors={setErrors} validators={[(e) => ageMinValidator(e, 0, 120), testValidator]}/>
                        <div className={"col-1 " + style.nice_hyphen}>-</div>
                        <Input name="ageMax" label={false}     type="number" onChange={setAgeMaxWrapper} classNames={{"label": "col-2", "input": "col-2"}} defaultValue={ageMax} errors={errors} setErrors={setErrors} validators={[(e) => ageMaxValidator(e, 0, 120), testValidator]}/>
                        <p>{errors['ageMin']} {errors['ageMax']}</p>
                    </div>
                    <div className="row mb-2 align-items-top">
                        <Input name="tags" label="tags" type="text" onChange={setCurrTag} onKeyDown={(e) => handleKeyDown(e, 'tag')} classNames={{"label": "col-2", "input": "col-3"}} value={currTag}/>
                        <ItemList delEvent={(e) => {handleDelEvent(e, 'tag')}} items={tags} classProp={{"list": style.tags_list, "item": style.tags_list_item}}/>
                    </div>
                    <div className="row mb-2 align-items-top">
                        <Select name="sexes" label="Who is allowed ?" value={currSex} optionList={<><option defaultValue={true}></option><Optionlist options={dbSexes}/></>} onChange={updateSelect} classNames={{"label": "col-2", "input": "col-3"}}/>
                        <ItemList delEvent={(e) => {handleDelEvent(e, 'sex')}} items={sexes} classProp={{"list": style.tags_list, "item": style.tags_list_item}}/>
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

export default PartyInfoForm