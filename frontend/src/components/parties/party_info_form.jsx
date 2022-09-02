import { useEffect, useState } from "react";

import axios from "axios";

import { backend_url } from "../../App";
import { Input } from "../generic/forms/input";
import style from "../css/theme.module.css"
import ItemList from "../generic/lists/item_list";
import Optionlist from "../generic/option_list";
import { Select } from "../generic/forms/select";


const PartyInfoForm = ({onInfoForm}) => {
    const date = new Date();
    const now = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${(date.getMinutes() + 1).toString().padStart(2, '0')}`;
    console.log(date.getMonth());
    const [start, setStart] = useState(now);
    const [end, setEnd] = useState(now);
    const [ageMin, setAgeMin] = useState(18);
    const [ageMax, setAgeMax] = useState(99);
    const [tags, setTags] = useState([]);
    const [currTag, setCurrTag] = useState("");
    const [sexes, setSexes] = useState([]);
    const [currSex, setCurrSex] = useState("");
    const [dbSexes, setDbSexes] = useState([]);
    const [errors, setErrors] = useState({});

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('wtf');
        const form = document.forms[0];
        if (form.checkValidity() === false) {
            form.reportValidity();
            return;
        }
        onInfoForm(
            {
                "partytimestart" :start,
                "partytimeend" :end,
                "partyagemin" :ageMin,
                "partyagemax" :ageMax,
                "partytags" :tags,
                "partysexes" :sexes,
        });
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
                console.log(currTag);
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
        if (!sexes.includes(e.target.value)) {
            setCurrSex(e.target.value);
            setSexes([...sexes, e.target.value]);
        }
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
        const date = new Date(value);
        const today = new Date();
        console.log(date);
        console.log(today);
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
                        <Input name="partystart" label="start/end" type="datetime-local" validators={[startDateValidator]} onChange={setStart} classNames={{"label": "col-2", "input": "col-5"}} value={start}/>
                    </div>
                    <div className="row mb-2 align-items-center">
                        <Input name="partyend" label=" " type="datetime-local" validators={[endDateValidator]} onChange={setEnd} classNames={{"label": "col-2", "input": "col-5"}} value={end}/>
                    </div>
                    <div className="row mb-2 align-items-top">
                        <Input name="ageMin" label="age range" type="number" onChange={setAgeMin} classNames={{"label": "col-2", "input": "col-2"}} value={ageMin} errors={errors} setErrors={setErrors} validators={[(e) => ageMinValidator(e, 0, 120)]}/>
                        <div className={"col-1 " + style.nice_hyphen}>-</div>
                        <Input name="ageMax" label={false}     type="number" onChange={setAgeMax} classNames={{"label": "col-2", "input": "col-2"}} value={ageMax} errors={errors} setErrors={setErrors} validators={[(e) => ageMaxValidator(e, 0, 120)]}/>
                        <p>{errors['ageMin']} {errors['ageMax']}</p>
                    </div>
                    <div className="row mb-2 align-items-top">
                        <Input name="tags" label="tags" type="text" onChange={setCurrTag} onKeyDown={(e) => handleKeyDown(e, 'tag')} classNames={{"label": "col-2", "input": "col-3"}} value={currTag} notRequired={true}/>
                        <ItemList delEvent={(e) => {handleDelEvent(e, 'tag')}} items={tags} classProp={{"list": style.tags_list, "item": style.tags_list_item}} />
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