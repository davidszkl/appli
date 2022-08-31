import { useState } from "react";
import style from "../css/theme.module.css"

import ItemList from "../generic/item_list";


const PartyInfoForm = ({onInfoForm}) => {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [ageMin, setAgeMin] = useState(18);
    const [ageMax, setAgeMax] = useState(99);
    const [tags, setTags] = useState([]);
    const [currTag, setCurrTag] = useState("");
    const [sexes, setSexes] = useState([]);
    const [currSex, setCurrSex] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        onInfoForm(start);
    }

    const handleKeyDownTag = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (currTag.trim().length !== 0)
                setTags([...tags, currTag]);
            setCurrTag("");
        }
    }

    const handleKeyDownSex = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (currSex.trim().length !== 0)
                setSexes([...sexes, currSex]);
            setCurrSex("");
        }
    }

    const handleDelEventTag = (index) => {
        const cpy = [...tags];
        cpy.splice(index, 1);
        cpy.length < 1 ? setTags([]) : setTags(cpy);
        // if (cpy.length < 2)
        //     setTags([])
        // else
        //     setTags(cpy.splice(index, 1));
    }

    const handleDelEventSex = (index) => {
        console.log(index);
    }

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-2"></div>
                        <div><h3>Some more info about your party...</h3></div>
                    </div>
                    <div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="partytime" className="form-label">start/end</label>
                            </div>
                            <div className="col-4">
                                <input type="datetime-local" name="partystart" className="form-control"
                                value={start} onChange={(e) => {setStart(e.target.value);}} required/>
                            </div> -
                            <div className="col-4">
                                <input type="datetime-local" name="partyend" className="form-control"
                                value={end} onChange={(e) => {setEnd(e.target.value);}} required/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="partyduration" className="form-label">age range</label>
                            </div>
                            <div className="col-2">
                                <input type="number" name="ageMin" className="form-control" placeholder="18"
                                    value={ageMin} onChange={(e) => {setAgeMin(e.target.value);}} required/>
                            </div>-
                            <div className="col-2">
                                <input type="number" name="ageMax" className="form-control" placeholder="99"
                                    value={ageMax} onChange={(e) => {setAgeMax(e.target.value);}} required/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="tags" className="form-label">tags</label>
                            </div>
                            <div className="col-2">
                                <input type="text" name="tags" className="form-control" 
                                 value={currTag} onChange={(e) => {setCurrTag(e.target.value);}} onKeyDown={handleKeyDownTag} required/>
                            </div>
                            <div className="col-6">
                                <ItemList delEvent={handleDelEventTag} items={tags} classProp={{"list": style.tags_list, "item": style.tags_list_item}}/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-2">
                                <label htmlFor="tags" className="form-label">Who is allowed ?</label>
                            </div>
                            <div className="col-2">
                                <input type="text" name="tags" className="form-control" 
                                 value={currSex} onChange={(e) => {setCurrTag(e.target.value);}} onKeyDown={handleKeyDownSex} required/>
                            </div>
                            <div className="col-6">
                                <ItemList delEvent={handleDelEventSex} items={sexes} classProp={{"list": style.tags_list, "item": style.tags_list_item}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
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

export default PartyInfoForm