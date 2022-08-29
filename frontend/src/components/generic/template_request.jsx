import { useState } from "react";

import axios from "axios"

import { backend_url } from "../../App"


const TemplateRequest = () => {
    const [val, setVal] = useState();
    const [data, setData] = useState();
    
    const url = `${backend_url}/test`;
    const headers = {
        headers:{"Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*"}
    }

    const handleRequest = (e) => {
        axios.get(url, data, headers)
        .then(res => {
            localStorage.setItem("token", res.data['token'])})
        .catch(e => console.log(e));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }

    return (
        <>
            <p>coucou</p>
            <button onClick={handleRequest}>request</button>
            <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default TemplateRequest